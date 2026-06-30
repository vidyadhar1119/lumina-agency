"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/hooks";
import { Button } from "./Button";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const mounted = useHasMounted();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass py-3 shadow-sm" : "py-5 bg-transparent"
            )}
        >
            <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                <a
                    href="#"
                    className="flex items-center gap-2.5 group shrink-0"
                    aria-label="Lumina – home"
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
                            className="fill-violet-600 dark:fill-violet-500 transition-transform duration-300 origin-center group-hover:scale-110"
                        />
                    </svg>

                    <span className="font-display text-xl font-bold text-stone-900 dark:text-white tracking-tight transition-colors duration-200 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                        Lumina
                    </span>
                </a>


                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle colour theme"
                            className="p-2 rounded-full text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer"
                        >
                            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                        </button>
                    )}

                    <Button size="sm" className="hidden md:inline-flex">
                        Let&apos;s Talk
                    </Button>

                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        className="md:hidden p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
                    >
                        <HamburgerIcon open={menuOpen} />
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="md:hidden glass border-t border-stone-200/20 mt-1">
                    <ul className="flex flex-col px-6 py-5 gap-5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Button size="sm" className="w-full">Let&apos;s Talk</Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

function SunIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
                <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </>
            ) : (
                <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </>
            )}
        </svg>
    );
}
