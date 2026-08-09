import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type FeatureProps = {
  id?: string;
  title: string;
  description: string;
  button: { label: string; href: string };
  image: string;
  imageAlt: string;
};

export function FeatureSection({
  feature,
  reversed = false,
}: {
  feature: FeatureProps;
  reversed?: boolean;
}) {
  return (
    <section id={feature.id} className={cn("bg-white py-12 sm:py-16 lg:py-10", reversed && "bg-white")}>
      <Container
        className={cn(
          "grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]",
          reversed && "lg:grid-cols-[1.25fr_0.75fr]",
        )}
      >
        <div className={cn("flex justify-center", reversed && "lg:order-last")}>
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            width={440}
            height={320}
            className="h-auto w-full max-w-[300px] lg:max-w-[350px] object-contain"
          />
        </div>
        <div className={cn("lg:text-left", reversed && "lg:order-first")}>
          <h2 className="font-display text-2xl font-bold leading-10 text-neutral-d-grey sm:text-[2.20rem]">
            {feature.title}
          </h2>
          <p className="mt-4 text-md leading-5 text-neutral-grey">{feature.description}</p>
          <div className="mt-7 flex justify-center lg:justify-start">
            <Button label={feature.button.label} href={feature.button.href} />
          </div>
        </div>
      </Container>
    </section>
  );
}
