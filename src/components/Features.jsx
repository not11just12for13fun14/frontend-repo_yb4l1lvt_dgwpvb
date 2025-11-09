import { Shield, Gauge, Coins, Code2 } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Kecepatan Ekstrem",
    desc: "Ribuan transaksi per detik dengan finalitas nyaris instan.",
  },
  {
    icon: Shield,
    title: "Keamanan Solid",
    desc: "Arsitektur konsensus modern dengan perlindungan berlapis.",
  },
  {
    icon: Coins,
    title: "Biaya Rendah",
    desc: "Gas fee efisien untuk skala pengguna masif.",
  },
  {
    icon: Code2,
    title: "Ramah Developer",
    desc: "Dokumentasi jelas, SDK ringan, kompatibel EVM.",
  },
];

export default function Features() {
  return (
    <section id="teknologi" className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Fondasi Teknologi
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            FailAmir Chain dibangun untuk performa, keamanan, dan skalabilitas tanpa kompromi.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white dark:bg-neutral-900 p-6 ring-1 ring-black/10 dark:ring-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
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
