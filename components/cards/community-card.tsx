import { Icon } from "@/components/ui/icon";

type CommunityCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function CommunityCard({ title, description, icon }: CommunityCardProps) {
  return (
    <article className="rounded-lg bg-white p-6 text-center shadow-[var(--shadow-4)]">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon name={icon} className="h-8 w-8" aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl font-semibold leading-tight text-neutral-d-grey">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-neutral-grey">{description}</p>
    </article>
  );
}
