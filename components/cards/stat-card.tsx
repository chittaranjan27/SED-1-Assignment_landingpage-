import { Icon } from "@/components/ui/icon";

type StatCardProps = {
  value: string;
  label: string;
  icon: string;
};

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon name={icon} className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <p className="font-display text-[1.75rem] font-semibold leading-none text-neutral-d-grey">
          {value}
        </p>
        <p className="mt-2 text-base text-neutral-grey">{label}</p>
      </div>
    </div>
  );
}
