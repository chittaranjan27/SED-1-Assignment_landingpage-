import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaProps = {
  title: string;
  button: { label: string; href: string; rightIcon?: string };
};

export function CtaSection({ cta }: { cta: CtaProps }) {
  return (
    <section className="bg-neutral-silver py-16 sm:py-20">
      <Container className="text-center">
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-neutral-black sm:text-5xl lg:text-[4rem]">
          {cta.title}
        </h2>
        <div className="mt-10 flex justify-center">
          <Button
            label={cta.button.label}
            href={cta.button.href}
            rightIcon={cta.button.rightIcon}
          />
        </div>
      </Container>
    </section>
  );
}
