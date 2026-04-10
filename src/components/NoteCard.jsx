import { useState } from "react";
import TagInput from "./TagInput";
import SaveIndicator from "./SaveIndicator";
import useDebouncedSave from "../hooks/useDebouncedSave";
import { useNotes } from "../context/NotesContext";

export default function NoteCard({ note }) {
  const { updateNote, trashNote } = useNotes();
  const [draft, setDraft] = useState(note);

  const status = useDebouncedSave(draft, 500, (data) =>
    updateNote(note.id, data)
  );

  return (
    <div className="note">
      <SaveIndicator status={status} />

      <input
        value={draft.title}
        placeholder="Title"
        onChange={e => setDraft({ ...draft, title: e.target.value })}
      />

      <textarea
        value={draft.content}
        placeholder="Write note..."
        onChange={e => setDraft({ ...draft, content: e.target.value })}
      />

      <TagInput
        tags={draft.tags || []}
        onChange={(tags) => setDraft({ ...draft, tags })}
      />

      <button onClick={() => trashNote(note.id)}>Delete</button>
    </div>
  );
}