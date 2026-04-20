import { useState } from "react";
import NoteEditModal from "./NoteEditModal";
import ConfirmModal from "./ConfirmModal";
import { useNotes } from "../context/NotesContext";

export default function NotePreviewModal({ note, isOpen, onClose }) {
  const { trashNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!isOpen || !note || !note.title || !note.title.trim()) return null;

  if (isEditing) {
    return (
      <NoteEditModal
        note={note}
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
      />
    );
  }

  const handleDelete = () => {
    trashNote(note.id);
    setShowConfirm(false);
    onClose();
  };

  const formattedDate = new Date(note.updatedAt).toLocaleDateString();
  const formattedTime = new Date(note.updatedAt).toLocaleTimeString();

  return (
    <>
      <div className="fixed inset-0 z-50 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm overflow-y-auto p-4 md:p-8">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg border border-slate-200 dark:border-neutral-800 max-w-4xl w-full mx-auto my-4 md:my-8 transition-colors duration-300">
          <div className="border-b border-slate-200 dark:border-neutral-800 px-6 md:px-8 py-5 flex items-start justify-between gap-4 bg-white dark:bg-neutral-900 rounded-t-3xl transition-colors duration-300">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold tracking-wide uppercase text-blue-600 mb-2">Reading View</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-neutral-100 leading-tight wrap-break-word">
                {note.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-neutral-400 mt-2">
                Updated on {formattedDate} at {formattedTime}
              </p>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-slate-700 dark:hover:text-neutral-200 transition-colors text-xl"
              aria-label="Close preview"
            >
              &times;
            </button>
          </div>

          <div className="px-6 md:px-8 py-7 md:py-8">
            <article className="max-w-3xl text-[1.02rem] leading-8 text-slate-700 dark:text-neutral-300 whitespace-pre-wrap wrap-break-word">
              {note.content || <span className="text-slate-400 dark:text-neutral-500 italic">No content</span>}
            </article>

            {note.tags && note.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-slate-200 dark:border-neutral-800">
                <p className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-neutral-400 mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-900/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900/50 px-6 md:px-8 py-4 flex items-center justify-end gap-3 rounded-b-3xl">
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 dark:border-neutral-700 bg-blue-50 dark:bg-neutral-800 text-blue-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-neutral-700 transition-colors font-semibold"
              title="Edit note"
            >
              <span aria-hidden="true">&#9998;</span>
              <span>Edit</span>
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-semibold"
              title="Delete note"
            >
              <span aria-hidden="true">&#128465;</span>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      <ConfirmModal
        show={showConfirm}
        onConfirm={handleDelete}
        onCancel={() => setShowConfirm(false)}
        title="Move to Trash?"
        message="This note will be moved to the trash bin. You can restore it later if needed."
        confirmText="Move to Trash"
      />
    </>
  );
}