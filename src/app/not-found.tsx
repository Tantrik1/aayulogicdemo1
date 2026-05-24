import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-brand-blue/5" />

      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-blue mb-5">
          Error · 404
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-brand-navy tracking-tight mb-6">
          Page not <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">found</span>.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto">
          The page you&rsquo;re looking for has moved, been renamed, or never existed. Let&rsquo;s get you back on course.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="group relative px-6 py-3.5 text-sm font-bold text-white rounded-xl overflow-hidden shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-xl" />
            <span className="absolute inset-0 rounded-xl border border-white/40 group-hover:border-white/70 transition-colors" />
            <span className="relative flex items-center gap-2">
              Return Home
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 text-sm font-semibold text-brand-navy hover:text-brand-blue border border-slate-200 hover:border-brand-blue/40 rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
