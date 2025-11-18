import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <footer className="bg-black text-white/60 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{background:'#c9944c'}}></div>
            <span className="text-sm">© {new Date().getFullYear()} DesertMind. Digital. Done.</span>
          </div>
          <div className="text-sm">Made with care — structured for impact.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
