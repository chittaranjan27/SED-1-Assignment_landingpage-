import Image from "next/image";
import { ClientLogoCard } from "@/components/cards/client-logo-card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  customerLink: { label: string; href: string };
  logos: Array<{ name: string; logo: string }>;
};

export function TestimonialSection({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <section className="bg-neutral-silver py-16">
      <Container className="grid gap-10 lg:grid-cols-[200px_1fr] lg:items-start">
        <div className="relative mx-auto h-[220px] w-[220px] overflow-hidden rounded-[12px] shadow-[var(--shadow-16)] sm:h-[200px] sm:w-[200px]">
          <Image
            src={testimonial.image}
            alt={testimonial.imageAlt}
            fill
            className="object-cover object-center"
            sizes="220px"
            priority
          />
        </div>
        <div className="text-center lg:text-left">
          <p className="text-base leading-8 text-neutral-grey">{testimonial.quote}</p>
          <p className="mt-6 text-xl font-semibold text-primary">{testimonial.name}</p>
          <p className="mt-2 text-base text-neutral-l-grey">{testimonial.role}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            {testimonial.logos.map((logo) => (
              <ClientLogoCard key={logo.name} {...logo} />
            ))}
            <a
              href={testimonial.customerLink.href}
              className="inline-flex items-center gap-2 whitespace-nowrap font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              {testimonial.customerLink.label}
              <Icon name="ArrowRight" className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
