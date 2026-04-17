import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { getUserNotes, saveUserNotes } from "../utils/storage";

const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

export function NotesProvider({ children }) {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (user) {
      const savedNotes = getUserNotes(user.id)
        .map(note => ({
          ...note,
          tags: Array.isArray(note.tags) ? note.tags : []
        }))
        .filter(note => note.title && note.title.trim());
      setNotes(savedNotes);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const notesWithTitle = notes.filter(note => note.title && note.title.trim());
      saveUserNotes(user.id, notesWithTitle);
    }
  }, [notes, user]);

  const addNote = () => {
    setNotes([
      {
        id: crypto.randomUUID(),
        title: "",
        content: "",
        tags: [],
        isTrashed: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      ...notes
    ]);
  };

  const updateNote = (id, data) => {
    setNotes(notes.map((n) => {
      if (n.id !== id) return n;

      const nextNote = { ...n, ...data };
      if (!nextNote.title || !nextNote.title.trim()) return n;

      return { ...nextNote, updatedAt: Date.now() };
    }));
  };

  const deleteEmptyNote = (id) =>
    setNotes(notes.filter(n => n.id !== id));

  const trashNote = (id) =>
    setNotes(notes.map(n => n.id === id && n.title.trim() ? { ...n, isTrashed: true, updatedAt: Date.now() } : n));

  const restoreNote = (id) =>
    updateNote(id, { isTrashed: false });

  const deleteForever = (id) =>
    setNotes(notes.filter(n => n.id !== id));

  return (
    <NotesContext.Provider value={{
      notes, addNote, updateNote, deleteEmptyNote, trashNote, restoreNote, deleteForever
    }}>
      {children}
    </NotesContext.Provider>
  );
}