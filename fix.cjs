const fs = require('fs');

const code = `import { useState } from "react";
import TagInput from "./TagInput";
import SaveIndicator from "./SaveIndicator";
import useDebouncedSave from "../hooks/useDebouncedSave";
import { useNotes } from "../context/NotesContext";

export default function NoteEditModal({ note, isOpen, onClose }) {
  const { updateNote } = useNotes();
  const [draft, setDraft] = useState(note);

  const status = useDebouncedSave(draft, 500, (data) => {
    if (data.title.trim()) {
      updateNote(note.id, data);
    }
  });

  const isTitleEmpty = !draft.title.trim();
  const hasChanged = JSON.stringify(draft) !== JSON.stringify(note);

  if (!isOpen || !note) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-96 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="border-b border-slate-200 p-6 flex items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900">Edit Note</h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Title *
            </label>
            <input
              value={draft.title}
              placeholder="Note title (required)"
              onChange={e => setDraft({ ...draft, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {isTitleEmpty && hasChanged && (
              <p className="text-xs text-red-500 mt-1">Title is required</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Content
            </label>
            <textarea
              value={draft.content}
              placeholder="Write your note..."
              onChange={e => setDraft({ ...draft, content: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none h-32"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Tags
            </label>
            <TagInput
              tags={draft.tags || []}
              onChange={(tags) => setDraft({ ...draft, tags })}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-slate-50 p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {!isTitleEmpty && <SaveIndicator status={status} />}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}`;

fs.writeFileSync('src/components/NoteEditModal.jsx', code);
console.log('Fixed NoteEditModal.jsx');
