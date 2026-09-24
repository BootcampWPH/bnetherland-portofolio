import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="custom-container items-center gap-7 overflow-hidden flex flex-wrap pt-28 md:pt-36.75">
      {/* kiri */}
      <div className="flex-[5.3] basis-80">
        <h1 className="md:text-display-2xl text-display-lg font-bold text-neutral-25">
          Your Trusted IT <span className="text-primary-300">Partner for Digital</span> Success
        </h1>

        <p className="text-sm font-regular md:text-md mt-3 text-neutral-400">
          We craft custom IT solutions that align with your goals, ensuring efficiency, security,
          and innovation
        </p>

        <Button asChild className="mt-6 w-full md:mt-12 md:w-fit ">
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>

      {/* kanan */}
      <div
        className="relative flex-[4.7] basis-80"
        style={{ height: 'clamp(21.25rem, 52.73vw, 39.81rem)' }}
      >
        <Image alt="hero-image" className="object-contain" fill src="/images/hero-image.png" />
      </div>

      {/* decoration */}
      <div />
    </section>
  );
};

export default Hero;
