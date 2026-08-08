import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

const Triangle = ({
  points,
  type,
  className,
}: {
  points: number[][];
  type: "solid" | "hollow";
  className?: string;
}) => {
  const cx = (points[0][0] + points[1][0] + points[2][0]) / 3;
  const cy = (points[0][1] + points[1][1] + points[2][1]) / 3;

  const scale = 0.85;
  const scaledPoints = points.map(([x, y]) => [
    (x - cx) * scale + cx,
    (y - cy) * scale + cy,
  ]);

  const pts = scaledPoints.map((p) => p.join(",")).join(" ");

  if (type === "hollow") {
    return (
      <polygon
        points={pts}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
        className={className}
      />
    );
  }
  return <polygon points={pts} fill="currentColor" className={className} />;
};

export function LogoMark({ className }: LogoMarkProps) {
  const h = 8.66; // Height of an equilateral triangle with base 10
  const triangles: {
    type: "solid" | "hollow";
    points: number[][];
    className?: string;
  }[] = [
    // Top Row
    { type: "solid", points: [[0, 0], [10, 0], [5, h]], className: "text-primary" },
    { type: "solid", points: [[10, 0], [5, h], [15, h]], className: "text-primary" },
    { type: "hollow", points: [[20, 0], [15, h], [25, h]], className: "text-neutral-black" },
    // Bottom Row
    { type: "hollow", points: [[5, h], [15, h], [10, h * 2]], className: "text-neutral-black" },
    { type: "solid", points: [[15, h], [10, h * 2], [20, h * 2]], className: "text-primary" },
    { type: "solid", points: [[15, h], [25, h], [20, h * 2]], className: "text-primary" },
  ];

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="40"
        height="28"
        viewBox="0 0 25 17.32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {triangles.map((t, i) => (
          <Triangle key={i} type={t.type} points={t.points} className={t.className} />
        ))}
      </svg>
      <span className="font-display text-[1.7rem] font-bold tracking-tight text-neutral-black">
        Nexcent
      </span>
    </div>
  );
}
