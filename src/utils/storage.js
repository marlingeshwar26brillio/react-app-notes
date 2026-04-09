// USERS
export const getUsers = () =>
  JSON.parse(localStorage.getItem("users") || "[]");

export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

// SESSION
export const getSession = () =>
  JSON.parse(sessionStorage.getItem("session") || "null");

export const setSession = (session) =>
  sessionStorage.setItem("session", JSON.stringify(session));

export const clearSession = () =>
  sessionStorage.removeItem("session");

// NOTES PER USER
export const getUserNotes = (userId) =>
  JSON.parse(localStorage.getItem(`notes_${userId}`) || "[]");

export const saveUserNotes = (userId, notes) =>
  localStorage.setItem(`notes_${userId}`, JSON.stringify(notes));

// THEME
export const getTheme = () =>
  localStorage.getItem("theme") || "light";

export const setThemeStorage = (theme) =>
  localStorage.setItem("theme", theme);