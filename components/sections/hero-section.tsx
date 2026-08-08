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
};

export function HeroSection({ hero }: { hero: HeroProps }) {
  return (
    <section id={hero.id} className="bg-neutral-silver py-12 sm:py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-[660px]">
          <h1 className="font-display text-4xl font-bold leading-[1.15] text-neutral-d-grey sm:text-5xl lg:text-[4rem]">
            {hero.title} <span className="text-primary">{hero.highlight}</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-grey">
            {hero.subtitle}
          </p>
          <div className="mt-8">
            <Button label={hero.button.label} href={hero.button.href} />
          </div>
        </div>
        <div className="justify-self-center">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            width={560}
            height={420}
            priority
          />
        </div>
      </Container>
    </section>
  );
}
