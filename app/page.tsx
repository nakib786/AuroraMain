'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Code, Calculator, Palette, Menu, X } from "lucide-react";

import AuroraBackground from "@/components/AuroraBackground";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
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

            {/* Floating Navigation */}
            <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                }`}>
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div></div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#about" className="text-slate-200 hover:text-blue-400 transition-colors">About</a>
                        <a href="#services" className="text-slate-200 hover:text-blue-400 transition-colors">Services</a>
                        <a href="#contact" className="text-slate-200 hover:text-blue-400 transition-colors">Contact</a>
                        <a
                            href="mailto:n@aurorabusiness.ca"
                            className="glass px-6 py-2 rounded-full hover:bg-blue-500/20 transition-all glow-hover"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden glass-strong border-t border-white/10">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <a href="#about" className="text-slate-200 hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
                            <a href="#services" className="text-slate-200 hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
                            <a href="#contact" className="text-slate-200 hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
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
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl gradient-text">
                        Get In Touch
                    </h2>
                    <p className="mb-12 text-center text-slate-400 text-lg">
                        Ready to transform your business? Let's start a conversation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="glass-strong rounded-2xl p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-blue-400 mt-1" />
                                <div>
                                    <p className="text-slate-400 text-sm">Email</p>
                                    <a
                                        href="mailto:n@aurorabusiness.ca"
                                        className="text-white hover:text-blue-400 transition-colors"
                                    >
                                        n@aurorabusiness.ca
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                                <div>
                                    <p className="text-slate-400 text-sm">Location</p>
                                    <p className="text-white">Serving Businesses Nationwide</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-blue-400 mt-1" />
                                <div>
                                    <p className="text-slate-400 text-sm">Availability</p>
                                    <p className="text-white">Monday - Friday, 9AM - 5PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-strong rounded-2xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'sending'}
                                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all glow-hover disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Sent!' : 'Send Message'}
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
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
