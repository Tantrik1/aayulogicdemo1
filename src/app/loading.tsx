export default function Loading() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-brand-blue/15" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-blue animate-spin" />
        </div>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
          Loading
        </p>
      </div>
    </div>
  );
}
