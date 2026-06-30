"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};
    if (data.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters.";
    }
    if (!EMAIL_REGEX.test(data.email)) {
        errors.email = "Please enter a valid email address.";
    }
    if (data.message.trim().length < 10) {
        errors.message = "Message must be at least 10 characters.";
    }
    return errors;
}

const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-800 border text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors duration-200";

const contactMeta = [
    {
        label: "Email",
        value: "hello@lumina.design",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        label: "Location",
        value: "Bangalore, India",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "Response Time",
        value: "Within 24 hours",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

export function Contact() {
    const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section id="contact" className="section-padding bg-surface-light-2 dark:bg-surface-dark-2">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        label="Get in Touch"
                        title="Let's build something great."
                        description="Have a project in mind? Drop us a message and we'll get back to you within 24 hours."
                    />
                </motion.div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="font-display text-2xl font-bold text-stone-900 dark:text-white mb-4">
                                Studio Information
                            </h3>
                            <p className="text-stone-500 dark:text-stone-400 leading-relaxed">
                                We work with ambitious teams around the world. Every great project starts with a conversation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactMeta.map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center shrink-0 text-violet-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-[0.15em] uppercase text-stone-400 dark:text-stone-500 mb-1">
                                            {item.label}
                                        </p>
                                        <p className="text-stone-800 dark:text-stone-200 font-medium">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-violet-50 dark:bg-purple-600/10 dark:backdrop-blur-md border border-violet-100 dark:border-purple-500/20 border-l-[3px] border-l-violet-500 dark:border-l-violet-400">
                            <p className="font-display text-lg font-bold text-violet-900 dark:text-white mb-2">
                                Ready to start?
                            </p>
                            <p className="text-violet-700 dark:text-stone-400 text-sm leading-relaxed">
                                Whether you have a full brief or just an idea, we&apos;re ready to listen and help you shape it.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center justify-center py-24 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center mb-6">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600 dark:text-violet-400">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="font-display text-3xl font-bold text-stone-900 dark:text-white mb-3">
                                    Message sent!
                                </h3>
                                <p className="text-stone-500 dark:text-stone-400 max-w-xs leading-relaxed">
                                    Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Jane Smith"
                                        className={`${inputBase} ${errors.name
                                            ? "border-red-400 dark:border-red-500"
                                            : "border-stone-200 dark:border-stone-700"
                                            }`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1.5 text-xs font-medium text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="jane@company.com"
                                        className={`${inputBase} ${errors.email
                                            ? "border-red-400 dark:border-red-500"
                                            : "border-stone-200 dark:border-stone-700"
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1.5 text-xs font-medium text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        className={`${inputBase} resize-none ${errors.message
                                            ? "border-red-400 dark:border-red-500"
                                            : "border-stone-200 dark:border-stone-700"
                                            }`}
                                    />
                                    {errors.message && (
                                        <p className="mt-1.5 text-xs font-medium text-red-500">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold bg-violet-600 text-white hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-200"
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
