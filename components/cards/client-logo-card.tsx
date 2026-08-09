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
        width={100}
        height={32}
        className="h-8 w-auto object-contain"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
