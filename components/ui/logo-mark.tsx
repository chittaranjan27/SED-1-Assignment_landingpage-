import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative h-9 w-9 rounded-xl bg-primary/15">
        <span className="absolute left-1 top-1 h-3.5 w-3.5 rounded-sm bg-primary" />
        <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full bg-primary-dark" />
        <span className="absolute bottom-1 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-sm bg-secondary" />
      </span>
      <span className="font-display text-[1.7rem] font-bold tracking-tight text-neutral-black">
        JustGo
      </span>
    </div>
  );
}
