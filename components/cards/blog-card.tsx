import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

type BlogCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

export function BlogCard({ title, image, imageAlt, href }: BlogCardProps) {
  return (
    <article className="group relative pb-16 mb-15">
      <div className="overflow-hidden rounded-[12px]">
        <Image
          src={image}
          alt={imageAlt}
          width={368}
          height={286}
          className="h-[200px] sm:h-[250px] lg:h-[286px] w-full object-cover transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-x-6 bottom-0 rounded-[10px] bg-neutral-silver p-6 text-center shadow-[var(--shadow-8)]">
        <h3 className="text-xl font-semibold leading-7 text-neutral-grey">{title}</h3>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          Readmore
          <Icon name="ArrowRight" className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
