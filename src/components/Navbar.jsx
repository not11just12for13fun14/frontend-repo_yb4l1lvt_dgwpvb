import { Rocket, BookOpenCheck, Blocks, Network } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="tracking-tight">FailAmir Chain</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#teknologi" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors flex items-center gap-2">
              <Blocks size={16} /> Teknologi
            </a>
            <a href="#ekosistem" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors flex items-center gap-2">
              <Network size={16} /> Ekosistem
            </a>
            <a href="#dokumentasi" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors flex items-center gap-2">
              <BookOpenCheck size={16} /> Dokumentasi
            </a>
          </nav>

          <a
            href="#testnet"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
          >
            Coba Testnet
          </a>
        </div>
      </div>
    </header>
  );
}
