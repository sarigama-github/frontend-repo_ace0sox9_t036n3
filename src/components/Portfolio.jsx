const GOLD = '#c9944c';

const items = [
  { title: 'Case Study A', tag: 'E‑Commerce' },
  { title: 'Case Study B', tag: 'Web Platform' },
  { title: 'Case Study C', tag: 'Consulting' },
  { title: 'Case Study D', tag: 'Optimization' },
  { title: 'Case Study E', tag: 'Architecture' },
  { title: 'Case Study F', tag: 'Migration' },
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <span className="text-sm text-white/60">More on request</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border bg-[#0a0a0a] p-6 transition" style={{borderColor:'rgba(255,255,255,0.08)'}}>
              <div className="aspect-video rounded-xl bg-black/40 border border-white/5" />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full" style={{background:'rgba(201,148,76,0.12)', color: GOLD, border:`1px solid ${GOLD}22`}}>{item.tag}</span>
              </div>
              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <button className="mt-3 text-sm text-white/70 group-hover:text-white">View details →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
