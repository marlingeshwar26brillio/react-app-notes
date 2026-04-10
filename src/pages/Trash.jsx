import { useState } from "react";
import Navbar from "../components/Navbar";
import ConfirmModal from "../components/ConfirmModal";
import { useNotes } from "../context/NotesContext";

export default function Trash() {
  const { notes, restoreNote, deleteForever } = useNotes();
  const [delId, setDelId] = useState(null);

  const trashed = notes.filter(n => n.isTrashed);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Trash</h2>
        {trashed.length === 0 && <p>Trash is empty.</p>}

        {trashed.map(n => (
          <div key={n.id} className="note">
            <h3>{n.title || "Untitled"}</h3>
            <button onClick={() => restoreNote(n.id)}>Restore</button>
            <button onClick={() => setDelId(n.id)}>Delete forever</button>
          </div>
        ))}

        <ConfirmModal
          show={!!delId}
          onCancel={() => setDelId(null)}
          onConfirm={() => {
            deleteForever(delId);
            setDelId(null);
          }}
        />
      </div>
    </>
  );
}