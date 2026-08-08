import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarCheck2,
  CreditCard,
  Globe2,
  HandCoins,
  HeartHandshake,
  LayoutDashboard,
  Menu,
  MonitorSmartphone,
  MoveRight,
  NotebookPen,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarCheck2,
  CreditCard,
  Globe2,
  HandCoins,
  HeartHandshake,
  LayoutDashboard,
  Menu,
  MonitorSmartphone,
  MoveRight,
  NotebookPen,
  ShieldCheck,
  Users,
};

type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
  ...props
}: React.ComponentProps<"svg"> & { name: string }) {
  const LucideIcon = icons[name as IconName];
  if (!LucideIcon) return null;
  return <LucideIcon className={cn(className)} {...props} />;
}
