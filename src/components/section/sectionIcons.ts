import {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  Users,
  MessageCircle,
  GraduationCap,
  Landmark,
  HeartPulse,
  Pill,
  Clapperboard,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react';

export const SECTION_ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Code2,
  Plug,
  Cloud,
  ShoppingBag,
  Cpu,
  Building2,
  Users,
  MessageCircle,
  GraduationCap,
  Landmark,
  HeartPulse,
  Pill,
  Clapperboard,
  ShoppingCart,
};

export type SectionIconName = keyof typeof SECTION_ICONS;
