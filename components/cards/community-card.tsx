import Image from "next/image";

type CommunityCardProps = {
  title: string;
  description: string;
  logo: string;
};

export function CommunityCard({ title, description, logo }: CommunityCardProps) {
  return (
    <article className="mx-auto flex max-w-[270px] flex-col items-center rounded-sm bg-white p-4 text-center shadow-[1px_2px_2px_rgba(0,0,0,0.02),-1px_2px_2px_rgba(0,0,0,0.02)]">
      <div className="mb-7 flex h-8 w-16 items-center justify-center rounded-xl item-center">
        <Image
          src={logo}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <h3 className="font-display text-2xl font-bold leading-tight text-neutral-d-grey">
        {title}
      </h3>
      <p className="mt-2 text-base leading-4 text-neutral-grey">{description}</p>
    </article>
  );
}
