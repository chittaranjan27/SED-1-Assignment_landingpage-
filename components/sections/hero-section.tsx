import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type HeroProps = {
  id: string;
  title: string;
  highlight: string;
  subtitle: string;
  button: { label: string; href: string };
  image: string;
  imageAlt: string;
  dot?: string;
};

export function HeroSection({ hero }: { hero: HeroProps }) {
  return (
    <section id={hero.id} className="relative bg-neutral-silver py-12 sm:py-16 lg:pt-24 lg:pb-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-[1.15] text-neutral-d-grey sm:text-5xl lg:text-[4rem]">
            {hero.title} <span className="text-primary">{hero.highlight}</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-neutral-grey mx-auto max-w-xl lg:mx-0">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button label={hero.button.label} href={hero.button.href} />
          </div>
        </div>
        <div className="hidden sm:flex justify-center lg:justify-self-center">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            width={560}
            height={420}
            className="h-auto w-full max-w-[480px] lg:max-w-full"
            priority
          />
        </div>
      </Container>

      {/* Dot decoration at the bottom of the hero section */}
      {hero.dot && (
        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2">
          <Image
            src={hero.dot}
            alt=""
            width={40}
            height={40}
            aria-hidden="true"
          />
        </div>
      )}
    </section>
  );
}
