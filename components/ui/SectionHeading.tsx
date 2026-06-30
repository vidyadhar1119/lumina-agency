import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    label: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    label,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "max-w-2xl",
                align === "center" && "mx-auto text-center",
                className
            )}
        >
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-violet-500 uppercase mb-4">
                {label}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-stone-900 dark:text-stone-50 mb-5">
                {title}
            </h2>
            {description && (
                <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
