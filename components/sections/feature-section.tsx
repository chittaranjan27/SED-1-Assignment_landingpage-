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
    <section id={feature.id} className={cn("bg-white py-12 sm:py-16 lg:py-20", reversed && "bg-white")}>
      <Container
        className={cn(
          "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]",
          reversed && "lg:grid-cols-[1.05fr_0.95fr]",
        )}
      >
        <div className={cn("flex justify-center", reversed && "lg:order-1")}>
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            width={440}
            height={420}
            className="h-auto w-full max-w-[400px] lg:max-w-full"
          />
        </div>
        <div className={cn("text-center lg:text-left", reversed ? "lg:order-1" : "")}>
          <h2 className="font-display text-3xl font-bold leading-tight text-neutral-d-grey sm:text-[2.25rem]">
            {feature.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-grey">{feature.description}</p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button label={feature.button.label} href={feature.button.href} />
          </div>
        </div>
      </Container>
    </section>
  );
}
