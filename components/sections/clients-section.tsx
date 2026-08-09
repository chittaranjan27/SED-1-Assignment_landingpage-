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
        <SectionHeading className="leading-sm " title={clients.title} description={clients.description} />
        <div className="mt-8 px-0">
          <div className="grid grid-cols-2 justify-items-center items-center gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {clients.items.map((client) => (
              <ClientLogoCard key={client.name} {...client} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
