import { useState } from "react";
export default function TagInput({ tags = [], onChange }) {
  const [input, setInput] = useState("");
  const addTag = () => {
    const value = input.trim();
    if (!value) return;
    if (!tags.includes(value)) onChange([...tags, value]);
    setInput("");
  };
  const addTagOnKey = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    addTag();
  };
  const removeTag = (tag) => onChange(tags.filter((t) => t !== tag));
  return (
    <div className="flex flex-wrap gap-2 items-center py-3">
      {" "}
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
        >
          {" "}
          <span>#{tag}</span>{" "}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold ml-1"
          >
            {" "}
            ✕{" "}
          </button>{" "}
        </div>
      ))}{" "}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTagOnKey}
        placeholder="Add tag..."
        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />{" "}
      <button
        type="button"
        onClick={addTag}
        className="px-3 py-1.5 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
      >
        {" "}
        Add{" "}
      </button>{" "}
    </div>
  );
}
