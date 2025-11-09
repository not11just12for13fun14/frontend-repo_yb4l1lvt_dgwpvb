import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="dokumentasi" className="py-20 bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Siap membangun di FailAmir Chain?</h2>
            <p className="mt-3 text-neutral-300">
              Mulai dengan dokumentasi, jalankan testnet, dan deploy smart contract pertama Anda.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-100 transition-colors">
                Buka Dokumentasi <ArrowRight size={16} />
              </a>
              <a href="#testnet" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-500 transition-colors">
                Gabung Testnet <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-xs text-neutral-300">TPS</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-2xl font-bold">&lt; 1s</div>
                <div className="text-xs text-neutral-300">Finalitas</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-2xl font-bold">$0.0001</div>
                <div className="text-xs text-neutral-300">Biaya Rata-rata</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-2xl font-bold">EVM</div>
                <div className="text-xs text-neutral-300">Kompatibilitas</div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-neutral-400 text-sm">
          © {new Date().getFullYear()} FailAmir Chain — Dibangun untuk masa depan Web3.
        </p>
      </div>
    </section>
  );
}
