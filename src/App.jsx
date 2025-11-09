import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Ecosystem />
        <CTA />
      </main>
    </div>
  );
}

export default App;
