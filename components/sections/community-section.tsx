import { CommunityCard } from "@/components/cards/community-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";

type CommunitySectionProps = {
  id: string;
  title: string;
  description: string;
  items: Array<{ title: string; description: string; icon: string }>;
};

export function CommunitySection({ community }: { community: CommunitySectionProps }) {
  return (
    <section id={community.id} className="bg-white py-12 sm:py-16">
      <Container>
        <SectionHeading title={community.title} description={community.description} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {community.items.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
