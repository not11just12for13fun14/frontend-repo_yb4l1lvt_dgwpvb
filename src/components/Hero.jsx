import Spline from '@splinetool/react-spline';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/GdV7LXrA7kA1F-7p/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white dark:from-neutral-950/60 dark:via-neutral-950/70 dark:to-neutral-950" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/70 px-3 py-1 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur">
              <Sparkles size={16} className="text-amber-500" />
              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Layer 1 untuk masa depan aplikasi terdesentralisasi</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              FailAmir Chain
            </h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
              Blockchain Layer 1 yang super cepat, aman, dan ramah developer. Bangun aplikasi Web3 tanpa batas dengan throughput tinggi dan biaya transaksi rendah.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#mulai" className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                Mulai Membangun
              </a>
              <a href="#whitepaper" className="inline-flex items-center justify-center rounded-lg bg-white text-neutral-900 px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-black/10 hover:bg-neutral-50 transition-colors dark:bg-neutral-900 dark:text-white dark:ring-white/10 dark:hover:bg-neutral-800">
                Baca Whitepaper
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-xl bg-white/70 dark:bg-neutral-900/70 p-4 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                  <Zap size={18} className="text-indigo-500" /> 10,000+ TPS
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Finalitas sub-detik, throughput tinggi</p>
              </div>
              <div className="rounded-xl bg-white/70 dark:bg-neutral-900/70 p-4 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                  <ShieldCheck size={18} className="text-emerald-500" /> Keamanan Kelas Dunia
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Konsensus modern & audit menyeluruh</p>
              </div>
              <div className="rounded-xl bg-white/70 dark:bg-neutral-900/70 p-4 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                  <Sparkles size={18} className="text-fuchsia-500" /> Ramah Developer
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">SDK cepat, tooling lengkap</p>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
