"use client"

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Send } from "lucide-react"

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().optional(),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    companyName: z.string().optional(),
    question: z.string().optional(),
    service: z.string().min(1, {
        message: "Please select a service.",
    }),
    newsletter: z.boolean().default(false).optional(),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must agree to the terms and conditions.",
    }),
})

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            question: "",
            newsletter: false,
            consent: false,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Mock submission
        console.log(values)
        setIsSubmitted(true)
        // In a real app, you would send this to your backend
    }

    if (isSubmitted) {
        return (
            <Card className="w-full h-full glass-strong border-white/10 text-white">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Thank You!</CardTitle>
                    <CardDescription className="text-slate-300">
                        We've received your message and will get back to you shortly.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all glow-hover"
                    >
                        Send another message
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full glass-strong border-white/10 text-white">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
                <CardDescription className="text-slate-300">
                    Fill out the form below to get in touch with our team.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-300">First Name *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John"
                                                {...field}
                                                className="glass border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-300">Last Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Doe"
                                                {...field}
                                                className="glass border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-300">Email *</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="john@example.com"
                                            type="email"
                                            {...field}
                                            className="glass border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-300">Company Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Acme Inc."
                                            {...field}
                                            className="glass border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-300">Choose Services</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="glass border-white/10 text-white focus:ring-blue-500">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-slate-900 border-slate-700 text-white">
                                            <SelectItem value="Website and Brand Solution">
                                                Website and Brand Solution
                                            </SelectItem>
                                            <SelectItem value="Accounting and Tax Solutions">
                                                Accounting and Tax Solutions
                                            </SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="question"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-300">Question?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="How can we help you?"
                                            className="resize-none glass border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="newsletter"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-white/10 p-4 glass">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="border-white/50 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-slate-300">
                                            Sign up for our newsletter
                                        </FormLabel>
                                        <FormDescription className="text-slate-400">
                                            Receive updates and news about our services.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="consent"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="border-white/50 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-slate-300">
                                            I agree to the privacy policy and terms of service. *
                                        </FormLabel>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all glow-hover"
                        >
                            Submit <Send className="ml-2 h-4 w-4" />
                        </Button>

                        <div className="text-center text-sm text-slate-400 mt-4">
                            Or email us at <a href="mailto:n@aurorabusiness.ca" className="text-blue-400 hover:underline">n@aurorabusiness.ca</a>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
