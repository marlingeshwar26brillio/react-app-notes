import { useState } from "react";
import TagInput from "./TagInput";
import SaveIndicator from "./SaveIndicator";
import useDebouncedSave from "../hooks/useDebouncedSave";
import { useNotes } from "../context/NotesContext";

export default function NoteEditModal({ note, isOpen, onClose }) {
  const { updateNote, deleteEmptyNote } = useNotes();
  const [draft, setDraft] = useState(note);

  const handleClose = () => {
    if (!draft.title || !draft.title.trim()) {
      deleteEmptyNote(note.id);
    }
    onClose();
  };

  const status = useDebouncedSave(draft, 500, (data) => {
    if (data.title.trim()) {
      updateNote(note.id, data);
    }
  });

  const isTitleEmpty = !draft.title.trim();
  const hasChanged = JSON.stringify(draft) !== JSON.stringify(note);

  if (!isOpen || !note) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-colors duration-300">
      <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-slate-200/70 dark:border-neutral-800 max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col transition-colors duration-300">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-neutral-800 px-6 py-5 flex items-center justify-between gap-4 bg-linear-to-r from-slate-50 to-white dark:from-neutral-800 dark:to-neutral-900">
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-wide uppercase text-blue-600 mb-1">Editing</p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-neutral-100">Edit Note</h2>
          </div>
          <button
            onClick={handleClose}
            className="shrink-0 w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-slate-700 dark:hover:text-neutral-200 transition-colors text-xl"
            aria-label="Close editor"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-neutral-300 mb-2">
              Title *
            </label>
            <input
              value={draft.title}
              placeholder="Note title (required)"
              onChange={e => setDraft({ ...draft, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {isTitleEmpty && hasChanged && (
              <p className="text-xs text-red-500 mt-1">Title is required</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-neutral-300 mb-2">
              Content
            </label>
            <textarea
              value={draft.content}
              placeholder="Write your note..."
              onChange={e => setDraft({ ...draft, content: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none h-32"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-neutral-300 mb-2">
              Tags
            </label>
            <TagInput
              tags={draft.tags || []}
              onChange={(tags) => setDraft({ ...draft, tags })}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900/50 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {!isTitleEmpty && <SaveIndicator status={status} />}
          </div>
          <button
            onClick={handleClose}
            className="px-6 py-2.5 rounded-xl border-2 border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-700 font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}