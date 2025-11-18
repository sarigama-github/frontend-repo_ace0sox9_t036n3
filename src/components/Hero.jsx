import Spline from '@splinetool/react-spline';
import { BadgeCheck } from 'lucide-react';

const GOLD = '#c9944c';
const DM_BLUE = '#00687f';

function DuneIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0 18c8 0 8-12 16-12s8 12 16 12 8-12 16-12 8 12 16 12" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Subtle vignettes and overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-[0.07]" style={{backgroundImage:'radial-gradient(600px_300px_at_70%_20%,#ffffff,transparent)'}}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-8">
        {/* Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{background: `conic-gradient(from 20deg, ${GOLD}, ${DM_BLUE})`}}></div>
            <span className="font-bold tracking-wide text-white">DesertMind</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="text-black px-4 py-2 rounded-full border" style={{background:GOLD, borderColor:GOLD}}>Contact</a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <DuneIcon />
              <span className="text-xs tracking-wide text-white/80">From desert → to structure</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">Digital solutions that move you forward — </span>
              <span style={{color: GOLD}}>Web, E-Commerce, Consulting.</span>
            </h1>

            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Turning your vision into digital solutions that last.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="px-5 py-3 rounded-full font-medium text-black" style={{background:GOLD}}>Start a project</a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <BadgeCheck className="w-4 h-4" color={DM_BLUE} />
                <span>Digital. Done.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block" aria-hidden>
            {/* Empty column kept for composition balance over Spline background */}
          </div>
        </div>
      </div>
    </section>
  );
}
