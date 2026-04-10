export default function FilterChips({ notes, selected, setSelected }) {
  const allTags = [...new Set(notes.flatMap(n => n.tags || []))];

  const toggleTag = (tag) => {
    if (selected.includes(tag))
      setSelected(selected.filter(t => t !== tag));
    else
      setSelected([...selected, tag]);
  };

  const clearSelection = () => setSelected([]);

  if (allTags.length === 0) {
    return <div className="chips">No tags available yet.</div>;
  }

  return (
    <div className="chips">
      {allTags.map(tag => (
        <button
          key={tag}
          type="button"
          className={selected.includes(tag) ? "chip active" : "chip"}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
      {selected.length > 0 && (
        <button type="button" className="chip" onClick={clearSelection}>
          Clear
        </button>
      )}
    </div>
  );
}