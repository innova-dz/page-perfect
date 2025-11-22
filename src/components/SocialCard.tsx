import { ArrowUpRight, ArrowUpLeft, LucideIcon } from "lucide-react";

interface SocialCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href: string;
}

const SocialCard = ({ icon: Icon, title, subtitle, href }: SocialCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-5 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <div className="relative w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>
      
      <div className="flex-1 text-right" dir="rtl">
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      
      <ArrowUpLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
    </a>
  );
};

export default SocialCard;
