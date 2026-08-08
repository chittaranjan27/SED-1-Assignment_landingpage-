import { ClientLogoCard } from "@/components/cards/client-logo-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";

type ClientsSectionProps = {
  title: string;
  description: string;
  items: Array<{ name: string; logo: string }>;
};

export function ClientsSection({ clients }: { clients: ClientsSectionProps }) {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <SectionHeading title={clients.title} description={clients.description} />
        <div className="mt-8 grid grid-cols-2 justify-items-center items-center gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {clients.items.map((client) => (
            <ClientLogoCard key={client.name} {...client} />
          ))}
        </div>
      </Container>
    </section>
  );
}
