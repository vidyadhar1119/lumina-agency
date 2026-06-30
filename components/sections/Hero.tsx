"use client";

import { motion, Variants } from "framer-motion";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const stats = [
    { value: "120+", label: "Projects Delivered" },
    { value: "8+", label: "Years of Experience" },
    { value: "98%", label: "Client Satisfaction" },
];

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-120 h-120 bg-violet-600/0 dark:bg-violet-600/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-95 h-95 bg-fuchsia-600/0 dark:bg-fuchsia-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-violet-900/0 dark:bg-violet-900/20 rounded-full blur-[140px]" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto px-6 md:px-12 text-center pt-28 pb-20"
            >
                <motion.div variants={fadeUp}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/8 text-sm font-medium text-stone-600 dark:text-stone-300 mb-10">
                        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                        Now accepting new projects for 2026
                    </span>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-none tracking-tight text-stone-900 dark:text-white mb-7"
                >
                    We craft{" "}
                    <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                        digital
                    </span>
                    <br className="hidden sm:block" /> experiences that endure.
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed mb-12"
                >
                    We partner with ambitious brands to build remarkable digital
                    presences. Expert strategy, high-end design, and flawless engineering.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#portfolio"
                        className="inline-flex items-center justify-center rounded-full px-9 py-4 text-base font-semibold bg-violet-600 text-white hover:bg-violet-500 hover:shadow-2xl hover:shadow-violet-600/40 active:scale-[0.97] transition-all duration-200"
                    >
                        View Our Work
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full px-9 py-4 text-base font-semibold bg-transparent border border-stone-300 dark:border-stone-500 text-stone-700 dark:text-stone-200 hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400 active:scale-[0.97] transition-all duration-200"
                    >
                        Start a Project
                    </a>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="mt-24 pt-10 border-t border-stone-200 dark:border-stone-800 grid grid-cols-3 gap-6 max-w-md mx-auto"
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="font-display text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
                                {stat.value}
                            </p>
                            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1.5 leading-tight">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-stone-500 dark:text-stone-400"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                </svg>
            </div>
        </section>
    );
}
