import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";
import FilterChips from "../components/FilterChips";

export default function Dashboard() {
  const { notes, addNote } = useNotes();
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const activeNotes = notes.filter(n => !n.isTrashed);

  const filtered = activeNotes.filter(note => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every(tag => note.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <SearchBar value={search} onChange={setSearch} />
        <FilterChips notes={activeNotes} selected={selectedTags} setSelected={setSelectedTags}/>
        <button onClick={addNote}>+ New Note</button>

        {activeNotes.length === 0 && <p>No notes yet. Create your first note!</p>}
        {activeNotes.length > 0 && filtered.length === 0 && <p>No notes match your search.</p>}

        <div className="grid">
          {filtered.map(n => <NoteCard key={n.id} note={n} />)}
        </div>
      </div>
    </>
  );
}