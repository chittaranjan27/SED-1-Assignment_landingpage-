import Image from "next/image";

type ClientLogoCardProps = {
  name: string;
  logo: string;
};

export function ClientLogoCard({ name, logo }: ClientLogoCardProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={40}
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
