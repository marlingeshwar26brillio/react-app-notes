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

  const removeTag = (tag) =>
    onChange(tags.filter(t => t !== tag));

  return (
    <div className="tags">
      {tags.map(tag => (
        <span key={tag} className="tag">
          {tag}
          <button type="button" onClick={() => removeTag(tag)}>x</button>
        </span>
      ))}
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={addTagOnKey}
        placeholder="Add tag and press Enter"
      />
      <button type="button" onClick={addTag}>Add</button>
    </div>
  );
}