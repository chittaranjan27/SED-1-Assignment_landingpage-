import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left",
        className,
      )}
    >
      <h2 className="font-display text-3xl font-bold leading-tight text-neutral-d-grey sm:text-4xl whitespace-pre-line">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-neutral-grey">{description}</p>
      ) : null}
    </div>
  );
}
