import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"; 

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    deprecated?: boolean; 
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-4", 
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          
          {item.deprecated && (
            <div className="absolute top-2 right-2 z-30">
              <Badge
                className="bg-[#4f7090] text-white"
                title="This project is no longer maintained."
              >
               ⛔ Deprecated
              </Badge>
            </div>
          )}
          
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#4f7090] dark:bg-slate-800/[0.8] block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="mt-2 flex flex-wrap gap-1">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white px-1.5 py-0.5 text-xs rounded-full font-mono border border-neutral-300 dark:border-neutral-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-3 overflow-hidden bg-[#243545] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", 
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3">{children}</div> 
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}> 
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", 
        className
      )}
    >
      {children}
    </p>
  );
};
