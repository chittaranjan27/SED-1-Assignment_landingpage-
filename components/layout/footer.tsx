import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { LogoMark } from "@/components/ui/logo-mark";

type FooterProps = {
  copyright: string;
  columns: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
  socialLinks: Array<{ label: string; href: string; logo: string }>;
  newsletter: {
    label: string;
    placeholder: string;
  };
};

export function Footer({ footer }: { footer: FooterProps }) {
  return (
    <footer className="bg-secondary py-16 text-white">
      <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-6">
          <LogoMark className="[&_span:last-child]:text-white" />
          <p className="max-w-xs text-sm leading-7 text-white/80">{footer.copyright}</p>
          <div className="flex gap-4">
            {footer.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Image
                  src={item.logo}
                  alt={item.label}
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain invert"
                />
              </a>
            ))}
          </div>
        </div>
        {footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-6 text-xl font-semibold">{column.title}</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-6 text-xl font-semibold">{footer.newsletter.label}</h3>
          <form className="flex items-center gap-3 rounded-lg bg-white/12 px-4 py-3">
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              aria-label={footer.newsletter.placeholder}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
            <button type="submit" aria-label="Submit email">
              <Icon name="ArrowRight" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Container>
    </footer>
  );
}
