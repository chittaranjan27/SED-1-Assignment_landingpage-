import { CommunityCard } from "@/components/cards/community-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";

type CommunitySectionProps = {
  id: string;
  title: string;
  description: string;
  items: Array<{ title: string; description: string; logo: string }>;
};

export function CommunitySection({ community }: { community: CommunitySectionProps }) {
  return (
    <section id={community.id} className="bg-white pb-12 sm:pb-16 pt-4">
      <Container>
        <SectionHeading title={community.title} description={community.description} />
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-30 px-[30px]">
          {community.items.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
