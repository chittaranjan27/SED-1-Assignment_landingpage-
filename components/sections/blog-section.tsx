import { BlogCard } from "@/components/cards/blog-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";

type BlogProps = {
  id: string;
  title: string;
  description: string;
  items: Array<{ title: string; image: string; imageAlt: string; href: string }>;
};

export function BlogSection({ blog }: { blog: BlogProps }) {
  return (
    <section id={blog.id} className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={blog.title} description={blog.description} />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {blog.items.map((item) => (
            <BlogCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
