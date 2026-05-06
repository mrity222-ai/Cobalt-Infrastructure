'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  projectAssistant,
  type ProjectAssistantOutput,
} from '@/ai/flows/project-assistant-flow';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles, Bot, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const formSchema = z.object({
  userInterests: z.string().min(10, {
    message: "Please describe your interests in a bit more detail.",
  }).max(500),
});

export function AiAssistant() {
  const [result, setResult] = useState<ProjectAssistantOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userInterests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const assistantResult = await projectAssistant(values);
      setResult(assistantResult);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not get suggestions from the AI assistant. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="bg-background/60 dark:bg-card/60 backdrop-blur-lg border-white/20 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Sparkles className="h-6 w-6 text-accent" />
          AI Assistant
        </CardTitle>
        <CardDescription>
          Tell us what you're looking for, and we'll suggest relevant projects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="userInterests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Interests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'sustainable urban planning' or 'high-speed transport solutions'"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Thinking...
                </>
              ) : "Get Suggestions"}
            </Button>
          </form>
        </Form>

        {result && (
          <Alert className="mt-6">
            <Bot className="h-4 w-4" />
            <AlertTitle>Our Suggestion</AlertTitle>
            <AlertDescription className="prose prose-sm dark:prose-invert">
              {result.suggestions}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
