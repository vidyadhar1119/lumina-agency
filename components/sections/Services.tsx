"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
    return (
        <section id="services" className="section-padding bg-surface-light-2 dark:bg-surface-dark-2">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        label="What We Do"
                        title="Services built for modern brands."
                        description="We combine sharp design thinking with technical precision to deliver solutions that look beautiful and perform exceptionally."
                    />
                </motion.div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl p-8 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/60 shadow-sm dark:shadow-none hover:-translate-y-2 hover:border-violet-500/40 dark:hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)] dark:hover:shadow-[0_8px_40px_rgba(139,92,246,0.18)] transition-all duration-300 cursor-default"
                        >
                            <div className="w-14 h-14 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20 transition-colors duration-300">
                                <span className="text-2xl text-violet-500" aria-hidden="true">
                                    {service.icon}
                                </span>
                            </div>

                            <h3 className="font-display text-xl font-bold text-stone-900 dark:text-white mb-3">
                                {service.title}
                            </h3>

                            <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-500 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                                Learn more
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
