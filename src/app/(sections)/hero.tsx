import HeroImage from "@/components/hero/hero-image";
import HeroDescription from "@/components/hero/hero-description";
import HeroButtons from "@/components/hero/hero-buttons";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-28"
    >
      <div className="-z-999 border-full pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-primary blur-[15rem]" />
      <HeroImage />
      <HeroDescription />
      <HeroButtons />
    </header>
  );
}
