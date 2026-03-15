import { useLayoutEffect, useRef } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Philosophy } from '../components/Philosophy';
import { Protocol } from '../components/Protocol';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  onOpenContact: () => void;
}

export const Home = ({ onOpenContact }: HomeProps) => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Future animations will go here
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Hero onOpenContact={onOpenContact} />
      <Features />
      <Philosophy />
      <Protocol onOpenContact={onOpenContact} />
    </div>
  );
};
