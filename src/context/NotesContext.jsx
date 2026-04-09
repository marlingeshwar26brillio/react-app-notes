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
      const savedNotes = getUserNotes(user.id).map(note => ({
        ...note,
        tags: Array.isArray(note.tags) ? note.tags : []
      }));
      setNotes(savedNotes);
    }
  }, [user]);

  useEffect(() => {
    if (user) saveUserNotes(user.id, notes);
  }, [notes]);

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

  const updateNote = (id, data) =>
    setNotes(notes.map(n => n.id === id ? { ...n, ...data, updatedAt: Date.now() } : n));

  const trashNote = (id) =>
    updateNote(id, { isTrashed: true });

  const restoreNote = (id) =>
    updateNote(id, { isTrashed: false });

  const deleteForever = (id) =>
    setNotes(notes.filter(n => n.id !== id));

  return (
    <NotesContext.Provider value={{
      notes, addNote, updateNote, trashNote, restoreNote, deleteForever
    }}>
      {children}
    </NotesContext.Provider>
  );
}