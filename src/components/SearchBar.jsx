export default function SearchBar({ value, onChange }) {
  return (
    <input
      placeholder="🔍 Search notes..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-2xl px-5 py-3 rounded-2xl border-2 border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
    />
  );
}
