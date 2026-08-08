import { Icon } from "@/components/ui/icon";

type ClientLogoCardProps = {
  name: string;
  icon: string;
};

export function ClientLogoCard({ name, icon }: ClientLogoCardProps) {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-white px-6 py-5 text-neutral-grey shadow-[var(--shadow-2)]">
      <Icon name={icon} className="h-6 w-6 text-primary" aria-hidden="true" />
      <span className="sr-only">{name}</span>
    </div>
  );
}
