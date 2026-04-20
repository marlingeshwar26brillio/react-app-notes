import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import NotePreviewModal from "../components/NotePreviewModal";
import NoteEditModal from "../components/NoteEditModal";
import SearchBar from "../components/SearchBar";
import FilterChips from "../components/FilterChips";
import GridPattern from "../components/GridPattern";

export default function Dashboard() {
  const { notes, addNote } = useNotes();
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNoteMode, setNewNoteMode] = useState(false);

  const activeNotes = notes.filter(n => !n.isTrashed);

  const filtered = activeNotes.filter(note => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some(tag => note.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const handleNewNote = () => {
    addNote();
    setNewNoteMode(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
        <GridPattern
          width={40}
          height={40}
          className="opacity-55 mask-[radial-gradient(ellipse_at_top,white,transparent_72%)]"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-neutral-100 mb-8">My Notes</h1>
            <SearchBar value={search} onChange={setSearch} />
          </div>

          {activeNotes.length > 0 && (
            <>
              <FilterChips notes={activeNotes} selected={selectedTags} setSelected={setSelectedTags}/>
              
              <div className="flex items-center justify-between mb-8">
                <p className="text-slate-600 dark:text-neutral-400">
                  {filtered.length} of {activeNotes.length} notes
                </p>
                <button 
                  onClick={handleNewNote}
                  className="px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
                >
                  + New Note
                </button>
              </div>
            </>
          )}

          {activeNotes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">📝</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-neutral-100 mb-4">No notes yet</h2>
              <p className="text-slate-600 dark:text-neutral-400 mb-8">Create your first note to get started!</p>
              <button 
                onClick={handleNewNote}
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                + Create Note
              </button>
            </div>
          )}

          {activeNotes.length > 0 && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-xl font-semibold text-slate-900 dark:text-neutral-100">No notes match your search</p>
              <p className="text-slate-600 dark:text-neutral-400 mt-2">Try adjusting your search or filters</p>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(n => (
                <NoteCard 
                  key={n.id} 
                  note={n}
                  onOpen={setSelectedNote}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      <NotePreviewModal 
        note={selectedNote ? notes.find(n => n.id === selectedNote.id) || selectedNote : null}
        isOpen={!!selectedNote}
        onClose={() => setSelectedNote(null)}
      />

      {/* Edit Modal for New Notes */}
      {newNoteMode && notes.length > 0 && (
        <NoteEditModal 
          note={notes[0]}
          isOpen={newNoteMode}
          onClose={() => setNewNoteMode(false)}
        />
      )}
    </>
  );
}