import { Globe, ShoppingBag, Workflow } from 'lucide-react';

const GOLD = '#c9944c';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Fast, accessible, and maintainable websites built with modern stacks and a focus on longevity.'
  },
  {
    icon: ShoppingBag,
    title: 'E‑Commerce Architecture',
    desc: 'From storefront to backend: scalable architectures, integrations, and performance optimizations.'
  },
  {
    icon: Workflow,
    title: 'Digital Consulting',
    desc: 'Clear roadmaps, systems thinking, and hands-on guidance to transform ideas into outcomes.'
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What I Offer</h2>
          <span className="text-sm text-white/60">Premium, minimal, exacting</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-[#0a0a0a] p-6 transition" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background:'rgba(201,148,76,0.08)', border:`1px solid ${GOLD}22`}}>
                <Icon color={GOLD} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-4 text-sm text-white/70 group-hover:text-white transition" style={{borderColor:GOLD}}>
                <span className="border-b border-transparent group-hover:border-[color:var(--gold)]" style={{borderColor: GOLD}}>Learn more</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
