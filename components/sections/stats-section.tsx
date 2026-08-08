import { StatCard } from "@/components/cards/stat-card";
import { Container } from "@/components/ui/container";

type StatsSectionProps = {
  stats: {
    items: Array<{ value: string; label: string; logo: string; color?: string }>;
  };
  summary: {
    title: string;
    highlight: string;
    description: string;
  };
};

export function StatsSection({ stats, summary }: StatsSectionProps) {
  return (
    <section className="bg-neutral-silver py-16">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-neutral-d-grey sm:text-[2.25rem]">
            {summary.title}
            <br />
            <span className="text-primary">{summary.highlight}</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-grey">{summary.description}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {stats.items.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
