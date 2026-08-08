import { ClientLogoCard } from "@/components/cards/client-logo-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";

type ClientsSectionProps = {
  title: string;
  description: string;
  items: Array<{ name: string; icon: string }>;
};

export function ClientsSection({ clients }: { clients: ClientsSectionProps }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={clients.title} description={clients.description} />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {clients.items.map((client) => (
            <ClientLogoCard key={client.name} {...client} />
          ))}
        </div>
      </Container>
    </section>
  );
}
