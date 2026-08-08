import Image from "next/image";

type StatCardProps = {
  value: string;
  label: string;
  logo: string;
};

export function StatCard({ value, label, logo }: StatCardProps) {
  const isClubs = label === "Clubs";
  return (
    <div className="flex items-start gap-4">
      <Image
        src={logo}
        alt={label}
        width={48}
        height={48}
        className="mt-1 h-12 w-12 object-contain"
        style={isClubs ? { filter: "invert(48%) sepia(79%) saturate(600%) hue-rotate(86deg) brightness(110%) contrast(110%)" } : undefined}
      />
      <div>
        <p className="font-display text-[1.75rem] font-semibold leading-none text-neutral-d-grey">
          {value}
        </p>
        <p className="mt-2 text-base text-neutral-grey">{label}</p>
      </div>
    </div>
  );
}
