import Image from "next/image";

type CommunityCardProps = {
  title: string;
  description: string;
  logo: string;
};

export function CommunityCard({ title, description, logo }: CommunityCardProps) {
  return (
    <article className="mx-auto flex max-w-[310px] flex-col items-center rounded-lg bg-white p-3 px-8 text-center shadow-[var(--shadow-4)]">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl item-center">
        <Image
          src={logo}
          alt={title}
          width={40}
          height={40}
          className="h-5 w-auto object-contain mr-10"
        />
      </div>
      <h3 className="font-display text-3xl font-bold leading-tight text-neutral-d-grey">
        {title}
      </h3>
      <p className="mt-2 text-md leading-6 text-neutral-grey">{description}</p>
    </article>
  );
}
