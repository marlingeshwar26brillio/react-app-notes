import { useState } from "react";
import Navbar from "../components/Navbar";
import ConfirmModal from "../components/ConfirmModal";
import { useNotes } from "../context/NotesContext";
import GridPattern from "../components/GridPattern";

export default function Trash() {
  const { notes, restoreNote, deleteForever } = useNotes();
  const [delId, setDelId] = useState(null);

  const trashed = notes.filter(n => n.isTrashed);

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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-neutral-100 mb-2">Trash</h1>
          <p className="text-slate-600 dark:text-neutral-400 mb-8">{trashed.length} item{trashed.length !== 1 ? 's' : ''}</p>

          {trashed.length === 0 && (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🗑️</p>
              <p className="text-xl font-semibold text-slate-900 dark:text-neutral-100">Trash is empty</p>
              <p className="text-slate-600 dark:text-neutral-400 mt-2">Deleted notes will appear here</p>
            </div>
          )}

          {trashed.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trashed.map(n => (
                <div key={n.id} className="bg-white dark:bg-neutral-800 border-2 border-slate-200 dark:border-neutral-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-4">{n.title || "Untitled"}</h3>
                  <p className="text-slate-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3">{n.content}</p>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => restoreNote(n.id)}
                      className="flex-1 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-sm"
                    >
                      ↩️ Restore
                    </button>
                    <button 
                      onClick={() => setDelId(n.id)}
                      className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors text-sm"
                    >
                      🗑️ Forever
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <ConfirmModal
            show={!!delId}
            onCancel={() => setDelId(null)}
            onConfirm={() => {
              deleteForever(delId);
              setDelId(null);
            }}
          />
        </div>
      </div>
    </>
  );
}