import { useNotes } from "../context/NotesContext";

export default function NoteCard({ note, onOpen }) {
  const { deleteEmptyNote } = useNotes();
  const isMissingTitle = !note.title || !note.title.trim();

  const handleClick = () => {
    if (!isMissingTitle) {
      onOpen(note);
    }
  };

  const handleRemoveEmpty = (e) => {
    e.stopPropagation();
    deleteEmptyNote(note.id);
  };

  if (isMissingTitle) {
    return (
      <div className="bg-white dark:bg-neutral-800 border-2 border-dashed border-slate-300 dark:border-neutral-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center min-h-40 opacity-70">
        <p className="text-slate-500 dark:text-neutral-400 text-sm mb-1 font-semibold">Title is required</p>
        <p className="text-slate-400 dark:text-neutral-500 text-xs mb-3">Untitled notes cannot be previewed or saved</p>
        <button
          onClick={handleRemoveEmpty}
          className="px-3 py-1.5 text-xs bg-slate-200 dark:bg-neutral-700 text-slate-600 dark:text-neutral-300 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-600 transition-colors"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-neutral-800 border-2 border-slate-200 dark:border-neutral-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 group"
    >
      <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {note.title}
      </h3>

      <p className="text-slate-600 dark:text-neutral-400 text-sm line-clamp-3 mb-4 leading-relaxed">
        {note.content || <span className="text-slate-400 dark:text-neutral-500 italic">No content</span>}
      </p>

      {note.tags && note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {note.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
          {note.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-slate-500 dark:text-neutral-500">
              +{note.tags.length - 3}
            </span>
          )}
        </div>
      )}

      <p className="text-xs text-slate-400 dark:text-neutral-500">
        {new Date(note.updatedAt).toLocaleDateString()}
      </p>

      <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm text-slate-500 dark:text-neutral-400">Click to view details &gt;</span>
      </div>
    </div>
  );
}