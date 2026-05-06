'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const contactDetails = [
    {
        icon: <MapPin className="h-6 w-6 text-primary" />,
        title: "Our Location",
        info: "5/270, Vipul Khand, Gomti Nagar, Lucknow, 226010",
    },
    {
        icon: <Phone className="h-6 w-6 text-primary" />,
        title: "Call Us",
        info: "+91 522-4005093",
    },
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Working Time",
        info: "Mon–Sat: 9AM – 5PM (Sunday: Holiday)",
    },
];

const emailList = [
    { label: "General", email: "cobaltinfra68@gmail.com" },
    { label: "Director", email: "director@cobaltinfra.in" },
    { label: "Head Office", email: "headoffice@cobaltinfra.in" },
    { label: "Human Resources", email: "hr@cobaltinfra.in" },
    { label: "Technical GM", email: "gm_tech@cobaltinfra.in" },
];

export function ContactInfo() {
    return (
        <div className="space-y-8">
            <Card className="shadow-2xl rounded-[2.5rem] border-none bg-background p-4">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 transition-all hover:bg-secondary/50">
                            <div className="bg-white p-3 rounded-xl shadow-sm">
                                {detail.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">{detail.title}</h4>
                                <p className="text-muted-foreground font-medium">{detail.info}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="shadow-2xl rounded-[2.5rem] border-none bg-background p-4">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">Department Emails</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {emailList.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 rounded-xl hover:bg-secondary/20 transition-colors">
                            <span className="text-sm font-bold text-primary/70 uppercase tracking-tighter">{item.label}</span>
                            <a href={`mailto:${item.email}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4">
                                {item.email}
                            </a>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
