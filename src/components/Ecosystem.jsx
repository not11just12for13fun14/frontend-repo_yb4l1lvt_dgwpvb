import { Wallet, Puzzle, Building2, Link2 } from "lucide-react";

const items = [
  {
    icon: Wallet,
    title: "Wallet & Explorer",
    desc: "Kelola aset, jelajahi transaksi, dan pantau jaringan.",
  },
  {
    icon: Puzzle,
    title: "SDK & Dev Tools",
    desc: "Kumpulan alat lengkap untuk membangun dApps dengan cepat.",
  },
  {
    icon: Building2,
    title: "Grants & Ekosistem",
    desc: "Program pendanaan untuk proyek-proyek Web3 inovatif.",
  },
  {
    icon: Link2,
    title: "Bridge Lintas Rantai",
    desc: "Jembatan aman untuk interoperabilitas aset.",
  },
];

export default function Ecosystem() {
  return (
    <section id="ekosistem" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Ekosistem</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Infrastruktur lengkap untuk pengguna dan developer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 ring-1 ring-black/10 dark:ring-white/10 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-indigo-600 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
