'use server';
/**
 * @fileOverview An AI-powered project assistant that suggests relevant case studies or insights
 * based on user interests for Cobalt Infrastructure Pvt. Ltd.
 *
 * - projectAssistant - A function that handles the project assistance process.
 * - ProjectAssistantInput - The input type for the projectAssistant function.
 * - ProjectAssistantOutput - The return type for the projectAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectAssistantInputSchema = z.object({
  userInterests: z.string().describe(
    'A description of the user\'s interests or what they are looking for, related to infrastructure projects or services.'
  ),
});
export type ProjectAssistantInput = z.infer<typeof ProjectAssistantInputSchema>;

const ProjectAssistantOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('Relevant project case study suggestions or summarized insights.'),
});
export type ProjectAssistantOutput = z.infer<typeof ProjectAssistantOutputSchema>;

export async function projectAssistant(input: ProjectAssistantInput): Promise<ProjectAssistantOutput> {
  return projectAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectAssistantPrompt',
  input: { schema: ProjectAssistantInputSchema },
  output: { schema: ProjectAssistantOutputSchema },
  prompt: `You are an AI-powered project assistant for Cobalt Infrastructure Pvt. Ltd., a leading company specializing in innovative, premium, and futuristic infrastructure solutions.

Your goal is to understand the user's expressed interests and provide them with relevant project case study suggestions or summarized insights into Cobalt Infrastructure's capabilities.

When suggesting project case studies, create plausible, compelling examples that align with Cobalt Infrastructure's innovative and futuristic brand. Focus on projects that would showcase advanced technology, sustainable practices, or complex engineering challenges.
When providing insights, highlight how Cobalt Infrastructure's services (e.g., immersive 3D hero sections, dynamic services showcases, cinematic project portfolios, interactive 'about us' narratives, premium contact forms) contribute to a premium and trustworthy client experience.

User's expressed interests: {{{userInterests}}}

Based on these interests, please provide your suggestions or insights in a concise and engaging manner.`,
});

const projectAssistantFlow = ai.defineFlow(
  {
    name: 'projectAssistantFlow',
    inputSchema: ProjectAssistantInputSchema,
    outputSchema: ProjectAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
