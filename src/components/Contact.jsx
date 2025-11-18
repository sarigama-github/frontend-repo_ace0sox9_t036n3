const GOLD = '#c9944c';
const DM_BLUE = '#00687f';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Let’s build something strong</h2>
        <p className="mt-3 text-center text-white/70">Tell me about your project, timeline, and goals. I’ll respond within 1–2 business days.</p>
        <form className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2" placeholder="Your name" />
            <input type="email" className="w-full rounded-lg bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2" placeholder="Email" />
          </div>
          <input className="w-full rounded-lg bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2" placeholder="Company / Organization" />
          <textarea rows="5" className="w-full rounded-lg bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2" placeholder="Project details" />
          <button className="mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-black transition" style={{background: GOLD}} onMouseOver={(e)=>{e.currentTarget.style.background=DM_BLUE;e.currentTarget.style.color='white';}} onMouseOut={(e)=>{e.currentTarget.style.background=GOLD;e.currentTarget.style.color='black';}}>
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
