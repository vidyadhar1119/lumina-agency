"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
];

const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
];

export function Footer() {
    return (
        <footer className="bg-stone-50 dark:bg-[#050508] border-t border-stone-200 dark:border-stone-800/60 text-stone-500 dark:text-stone-400 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <a
                            href="#hero"
                            className="flex items-center gap-3 group shrink-0"
                            aria-label="Lumina – back to top"
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M16 2L30 16L16 30L2 16Z"
                                    className="fill-violet-600/15 dark:fill-violet-500/20 stroke-violet-600 dark:stroke-violet-500"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M16 9L23 16L16 23L9 16Z"
                                    className="fill-violet-600 dark:fill-violet-500"
                                />
                            </svg>
                            <span className="font-display text-xl font-bold tracking-tight text-stone-900 dark:text-white">
                                Lumina
                            </span>
                        </a>
                        <p className="text-sm text-stone-500 dark:text-stone-500 text-center md:text-left">
                            Crafting digital experiences that matter.
                        </p>
                    </div>

                    <ul className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm text-stone-500 dark:text-stone-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-300 dark:border-white/10 text-stone-400 dark:text-stone-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 dark:hover:border-violet-400 transition-all duration-200"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-stone-200 dark:border-white/5 text-center text-xs text-stone-400 dark:text-stone-600">
                    © {new Date().getFullYear()} Lumina Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
