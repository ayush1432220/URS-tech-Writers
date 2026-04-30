export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
