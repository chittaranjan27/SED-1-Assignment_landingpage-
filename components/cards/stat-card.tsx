import Image from "next/image";

type StatCardProps = {
  value: string;
  label: string;
  logo: string;
  color?: string;
};

export function StatCard({ value, label, logo, color }: StatCardProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="mt-1 h-12 w-12 flex-shrink-0"
        style={color ? { color } : undefined}
      >
        <Image
          src={logo}
          alt={label}
          width={48}
          height={48}
          className="object-contain "
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div>
        <p className="font-display text-[1.75rem] font-semibold leading-none text-neutral-d-grey">
          {value}
        </p>
        <p className="mt-1 text-base text-neutral-grey">{label}</p>
      </div>
    </div>
  );
}
