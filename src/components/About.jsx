const GOLD = '#c9944c';

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About DesertMind</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I’m a solo digital consultant and developer helping ambitious teams turn ideas into stable, elegant digital products. From refined storefronts to custom web experiences, I build with clarity and structure — always with long-term maintainability in mind.
            </p>
            <p className="mt-4 text-white/80">
              My approach blends strategy, design sensibility, and engineering precision. Expect clear communication, reliable delivery, and craftsmanship at every layer.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <h3 className="text-xl font-semibold" style={{color: GOLD}}>Focus</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• E-Commerce systems that scale</li>
                <li>• Robust web platforms and sites</li>
                <li>• Practical, outcome-driven consulting</li>
              </ul>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold" style={{color: GOLD}}>8+</div>
                  <div className="text-xs text-white/60">Years experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: GOLD}}>50+</div>
                  <div className="text-xs text-white/60">Projects shipped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: GOLD}}>100%</div>
                  <div className="text-xs text-white/60">Ownership mindset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
