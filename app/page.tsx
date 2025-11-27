'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Code, Calculator, Palette } from "lucide-react";

import AuroraBackground from "@/components/AuroraBackground";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        question: '',
        service: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initialize Turnstile when component mounts
    useEffect(() => {
        // Wait for Turnstile to be available
        const initTurnstile = () => {
            if (typeof window !== 'undefined' && (window as any).turnstile) {
                const widgetId = (window as any).turnstile.render('#turnstile-widget', {
                    sitekey: '0x4AAAAAACDMAU3eJpox8G4G',
                    theme: 'dark',
                    callback: (token: string) => {
                        setTurnstileToken(token);
                    },
                    'error-callback': () => {
                        setTurnstileToken(null);
                    },
                    'expired-callback': () => {
                        setTurnstileToken(null);
                    },
                });
                setTurnstileWidgetId(widgetId);
            }
        };

        // Check if Turnstile is already loaded
        if ((window as any).turnstile) {
            initTurnstile();
        } else {
            // Wait for Turnstile script to load
            const checkTurnstile = setInterval(() => {
                if ((window as any).turnstile) {
                    clearInterval(checkTurnstile);
                    initTurnstile();
                }
            }, 100);

            return () => clearInterval(checkTurnstile);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.firstName || !formData.email) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
            return;
        }

        // Validate Turnstile token
        if (!turnstileToken) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
            return;
        }

        setFormStatus('sending');

        try {
            const form = e.currentTarget;
            const formDataToSend = new FormData(form);

            // Submit to FormSubmit.co
            const response = await fetch('https://formsubmit.co/n@aurorabusiness.ca', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    companyName: '',
                    question: '',
                    service: ''
                });

                // Reset Turnstile widget
                if (turnstileWidgetId !== null && (window as any).turnstile) {
                    (window as any).turnstile.reset(turnstileWidgetId);
                }
                setTurnstileToken(null);

                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    };

    const services = [
        {
            icon: <Code className="h-12 w-12" />,
            title: "Website Building",
            description: "Static, Premium, and Budget-Friendly options to suit your needs.",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
        },
        {
            icon: <Calculator className="h-12 w-12" />,
            title: "Accounting Services",
            description: "Bookkeeping, Taxation, Business Registration Consulting, and more.",
            features: ["Tax Filing", "Bookkeeping", "Consulting"]
        },
        {
            icon: <Palette className="h-12 w-12" />,
            title: "Brand Kits",
            description: "Comprehensive brand kits to enhance your business's visual identity.",
            features: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
        }
    ];

    return (
        <main className="min-h-screen overflow-x-hidden relative z-10">
            <AuroraBackground speed={0.2} />

            {/* Floating Tubelight Navigation */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[98%] md:w-auto max-w-full ${isScrolled ? 'top-4' : 'top-6'
                }`}>
                {/* Desktop Tubelight Nav */}
                <div className="hidden md:flex items-center gap-2 px-8 py-4 rounded-full tubelight-nav">
                    <a href="#about" className="nav-link">About</a>
                    <span className="text-white/20">|</span>
                    <a href="#services" className="nav-link">Services</a>
                    <span className="text-white/20">|</span>
                    <a href="#contact" className="nav-link">Contact</a>
                    <span className="text-white/20">|</span>
                    <a
                        href="mailto:n@aurorabusiness.ca"
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all glow-hover ml-2"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Tubelight Nav - Compact */}
                <div className="md:hidden flex items-center justify-center gap-1 px-3 py-2.5 rounded-full tubelight-nav">
                    <a href="#about" className="nav-link-mobile">About</a>
                    <span className="text-white/20 text-xs">|</span>
                    <a href="#services" className="nav-link-mobile">Services</a>
                    <span className="text-white/20 text-xs">|</span>
                    <a href="#contact" className="nav-link-mobile">Contact</a>
                    <span className="text-white/20 text-xs">|</span>
                    <a
                        href="mailto:n@aurorabusiness.ca"
                        className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all glow-hover whitespace-nowrap text-xs"
                    >
                        Get Started
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 overflow-hidden">
                {/* Background is now handled by AuroraBackground component */}

                <div className="container mx-auto text-center relative z-10 fade-in">
                    <div className="mb-8 flex justify-center float">
                        <div className="relative">
                            <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full"></div>
                            <Image
                                src="/AuroraLogo.svg"
                                alt="Aurora N&N Business Solution Inc."
                                width={400}
                                height={400}
                                priority
                                className="h-auto w-64 md:w-96 relative z-10"
                            />
                        </div>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
                        <span className="gradient-text">Empowering</span>
                        <br />
                        <span className="text-white">Small Businesses</span>
                    </h1>
                    <p className="mb-8 text-xl text-slate-300 md:text-2xl max-w-3xl mx-auto">
                        Website Building & Accounting Services Tailored for Your Success
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden glow-hover"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                Let's Chat!! <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="mailto:n@aurorabusiness.ca"
                            className="glass px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-all border border-white/20"
                        >
                            Email Us
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative px-4 py-32">
                <div className="container mx-auto max-w-5xl">
                    <div className="glass-strong rounded-3xl p-8 md:p-16 slide-in">
                        <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl gradient-text">
                            About Us
                        </h2>
                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                            <p className="text-xl text-center text-blue-300 font-semibold">
                                Level up your brand with the latest digital trends and solutions.
                            </p>
                            <p>
                                Welcome to <span className="gradient-text-blue font-semibold">Aurora N&N Business Solution Inc.</span>
                            </p>
                            <p>
                                Our dedicated team specializes in empowering small businesses with top-notch
                                website building and accounting services. We provide personalized solutions
                                to help you succeed in today's competitive market. Partner with us for
                                excellence, integrity, and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="relative px-4 py-32">
                <div className="container mx-auto">
                    <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl gradient-text">
                        Our Services
                    </h2>
                    <p className="mb-16 text-center text-slate-400 text-lg">
                        Comprehensive solutions designed to elevate your business
                    </p>
                    <div className="grid gap-8 md:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group glass rounded-2xl p-8 transition-all duration-300 hover:scale-105 glow-hover cursor-pointer"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="mb-6 text-blue-400 group-hover:text-purple-400 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-white">
                                    {service.title}
                                </h3>
                                <p className="text-slate-300 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative px-4 py-32">
                <div className="container mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6">
                            <Sparkles className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-slate-300">Let's Connect</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl gradient-text">
                            Get In Touch
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Ready to transform your business? Let's start a conversation and bring your vision to life.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                        {/* Contact Info - Takes 2 columns */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Email Card */}
                            <div className="group glass-strong rounded-2xl p-5 sm:p-6 hover:scale-105 transition-all duration-300 glow-hover cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30">
                                        <Mail className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-slate-400 text-sm mb-1">Email Us</p>
                                        <a
                                            href="mailto:n@aurorabusiness.ca"
                                            className="text-white text-lg font-semibold hover:text-blue-400 transition-colors block"
                                        >
                                            n@aurorabusiness.ca
                                        </a>
                                        <p className="text-slate-500 text-sm mt-2">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="group glass-strong rounded-2xl p-5 sm:p-6 hover:scale-105 transition-all duration-300 glow-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-400/30">
                                        <MapPin className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-slate-400 text-sm mb-1">Location</p>
                                        <p className="text-white text-lg font-semibold">Serving Businesses</p>
                                        <p className="text-white text-lg font-semibold">Nationwide</p>
                                        <p className="text-slate-500 text-sm mt-2">Remote-first approach</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="glass-strong rounded-2xl p-5 sm:p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold gradient-text mb-1">24h</div>
                                        <div className="text-slate-400 text-sm">Response Time</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                                        <div className="text-slate-400 text-sm">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Takes 3 columns */}
                        <div className="lg:col-span-3">
                            <div className="glass-strong rounded-3xl p-4 sm:p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                                <p className="text-slate-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Hidden FormSubmit.co configuration fields */}
                                    <input type="hidden" name="_subject" value="New Contact Form Submission - Aurora Business" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />

                                    {/* Name Fields */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-slate-300 mb-3">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-slate-300 mb-3">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email and Company */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="companyName" className="block text-sm font-semibold text-slate-300 mb-3">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    {/* Service Selection */}
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-3">
                                            I'm interested in...
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full px-5 py-4 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-900/50"
                                        >
                                            <option value="" disabled className="bg-slate-900 text-slate-500">Select a service</option>
                                            <option value="Website and Brand Solution" className="bg-slate-900">Website and Brand Solution</option>
                                            <option value="Accounting and Tax Solutions" className="bg-slate-900">Accounting and Tax Solutions</option>
                                            <option value="Other" className="bg-slate-900">Other</option>
                                        </select>
                                    </div>

                                    {/* Question */}
                                    <div>
                                        <label htmlFor="question" className="block text-sm font-semibold text-slate-300 mb-3">
                                            Your Question
                                        </label>
                                        <textarea
                                            id="question"
                                            name="question"
                                            rows={4}
                                            value={formData.question}
                                            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                            className="w-full px-5 py-4 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    {/* Turnstile Widget */}
                                    <div id="turnstile-widget" className="min-h-[65px] flex justify-center"></div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className="group w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all glow-hover disabled:opacity-50 flex items-center justify-center gap-3 relative overflow-hidden"
                                    >
                                        <span className="relative z-10">
                                            {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                                        </span>
                                        <Send className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </button>

                                    {/* Status Messages */}
                                    {formStatus === 'success' && (
                                        <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-200 text-center animate-fade-in">
                                            Thank you! Your message has been sent successfully. We'll be in touch soon.
                                        </div>
                                    )}
                                    {formStatus === 'error' && (
                                        <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-center animate-fade-in">
                                            {turnstileToken ? "Something went wrong. Please try again later." : "Please complete the security check."}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-white/10 px-4 py-12">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="mb-4">
                                <Image
                                    src="/AuroraLogo.svg"
                                    alt="Aurora N&N Business Solution Inc."
                                    width={150}
                                    height={50}
                                    className="h-16 w-auto"
                                />
                            </div>
                            <p className="text-slate-400 text-sm">
                                Empowering small businesses with expert solutions since 2024.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                            <div className="space-y-2">
                                <a href="#about" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">About Us</a>
                                <a href="#services" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">Services</a>
                                <a href="#contact" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">Contact</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Services</h4>
                            <div className="space-y-2">
                                <p className="text-slate-400 text-sm">Website Building</p>
                                <p className="text-slate-400 text-sm">Accounting Services</p>
                                <p className="text-slate-400 text-sm">Brand Kits</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            &copy; {new Date().getFullYear()} Aurora N&N Business Solution Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
