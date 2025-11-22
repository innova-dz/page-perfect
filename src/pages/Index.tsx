import GlowingLogo from "@/components/GlowingLogo";
import SocialCard from "@/components/SocialCard";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Music } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-lg mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <GlowingLogo />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Innova Digital
          </h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Premium Digital Services
          </p>
        </div>

        {/* Services Description */}
        <div className="text-center space-y-3 px-4" dir="rtl">
          <p className="text-foreground/90 text-base">
            🎁 خدمات رقمية شهريات تجريبك
          </p>
          <p className="text-foreground/90 text-base">
            ✨ Snapchat Premium, Netflix, Canva
          </p>
          <p className="text-foreground/90 text-base">
            💖 بأسعار رمزية، حلي حسابك لساه وحساباتنا اَكثَر
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            className="gradient-primary text-white px-8 py-6 rounded-full text-base font-semibold hover:scale-105 transition-transform duration-300 glow-primary"
            dir="rtl"
          >
            👇 انقضي إعلاناتنا الأرقمية وتابعني يحبيبنا 👇
          </Button>
        </div>

        {/* Social Cards */}
        <div className="space-y-4">
          <SocialCard
            icon={Facebook}
            title="Facebook"
            subtitle="انقضي | انضممنا 💖"
            href="https://facebook.com"
          />
          <SocialCard
            icon={Instagram}
            title="Instagram"
            subtitle="حلايتنا وتسابقنا ✨"
            href="https://instagram.com"
          />
          <SocialCard
            icon={Music}
            title="TikTok"
            subtitle="جديد الفيديوز 🔥"
            href="https://tiktok.com"
          />
        </div>

        {/* Footer */}
        <div className="text-center space-y-1 pt-8">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            Innova Digital © 2025
          </p>
          <p className="text-xs text-muted-foreground/60">
            Architecting the Future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
