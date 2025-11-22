const GlowingLogo = () => {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="relative w-32 h-32 bg-foreground rounded-full flex items-center justify-center glow-primary-strong">
        <div className="w-28 h-28 bg-background rounded-full" />
      </div>
    </div>
  );
};

export default GlowingLogo;
