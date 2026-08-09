"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-silver py-6 relative z-50">
      <Container className="flex items-center justify-between gap-6 !px-4 sm:!px-6 md:!px-10 lg:!px-[92px]">
        <Link href="/" aria-label="Nexcent home">
          <LogoMark />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-10 lg:flex">
          {navigation.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base text-black transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#login" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
            {navigation.loginLabel}
          </a>
          <Button label={cta.label} href={cta.href} size="sm" variant="primary" />
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center gap-[5px] lg:hidden p-2"
        >
          <span className={`block h-0.5 w-6 bg-neutral-d-grey transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-neutral-d-grey transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-neutral-d-grey transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </Container>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-neutral-silver border-t border-neutral-200 px-4 py-6 flex flex-col gap-4">
          {navigation.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-black transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <hr className="border-neutral-200" />
          <a href="#login" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
            {navigation.loginLabel}
          </a>
          <div>
            <Button label={cta.label} href={cta.href} size="sm" variant="primary" />
          </div>
        </div>
      )}
    </header>
  );
}
