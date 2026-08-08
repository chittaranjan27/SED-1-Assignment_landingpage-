import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  navigation: {
    loginLabel: string;
    items: Array<{ label: string; href: string }>;
  };
  cta: {
    label: string;
    href: string;
  };
};

export function Header({ navigation, cta }: HeaderProps) {
  return (
    <header className="bg-neutral-silver py-6">
      <Container className="flex items-center justify-between gap-6">
        <Link href="/" aria-label="JustGo home">
          <LogoMark />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-10 lg:flex">
          {navigation.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base text-neutral-d-grey transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#login" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
            {navigation.loginLabel}
          </a>
          <Button label={cta.label} href={cta.href} size="sm" variant="primary" />
        </div>
      </Container>
    </header>
  );
}
