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
      <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm overflow-y-auto p-4 md:p-8">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 max-w-4xl w-full mx-auto my-4 md:my-8">
          <div className="border-b border-slate-200 px-6 md:px-8 py-5 flex items-start justify-between gap-4 bg-white">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold tracking-wide uppercase text-blue-600 mb-2">Reading View</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight wrap-break-word">
                {note.title}
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Updated on {formattedDate} at {formattedTime}
              </p>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors text-xl"
              aria-label="Close preview"
            >
              &times;
            </button>
          </div>

          <div className="px-6 md:px-8 py-7 md:py-8">
            <article className="max-w-3xl text-[1.02rem] leading-8 text-slate-700 whitespace-pre-wrap wrap-break-word">
              {note.content || <span className="text-slate-400 italic">No content</span>}
            </article>

            {note.tags && note.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-slate-200">
                <p className="text-xs font-semibold tracking-wide uppercase text-slate-500 mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 md:px-8 py-4 flex items-center justify-end gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold"
              title="Edit note"
            >
              <span aria-hidden="true">&#9998;</span>
              <span>Edit</span>
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-semibold"
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
      />
    </>
  );
}