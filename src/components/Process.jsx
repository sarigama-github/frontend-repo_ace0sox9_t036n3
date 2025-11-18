import { ArrowRight } from 'lucide-react';

const GOLD = '#c9944c';
const DM_BLUE = '#00687f';

const steps = [
  { title: 'Discover', desc: 'We clarify goals, constraints, and success metrics.' },
  { title: 'Design', desc: 'Structure, flows, and technical architecture.' },
  { title: 'Build', desc: 'Iterative development with clear milestones.' },
  { title: 'Refine', desc: 'QA, polish, and handover with documentation.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How I Work</h2>
          <span className="text-sm text-white/60">Clear steps. No noise.</span>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="grid md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border bg-[#0a0a0a] p-6" style={{borderColor:'rgba(255,255,255,0.08)'}}>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-black font-semibold" style={{background: DM_BLUE}}>{i+1}</span>
                  <ArrowRight className="w-4 h-4" color={DM_BLUE} />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
