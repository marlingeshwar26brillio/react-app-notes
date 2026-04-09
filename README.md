# Notely 📝

Hey there! Notely is a cool little notes app built with React and Vite. It's all about creating, organizing, and managing your notes with tags, search, filters, and even a trash bin. Everything saves locally in your browser, and you can switch between light and dark themes. Super handy for jotting down ideas!

## What's Cool About It

- **Login/Signup**: Simple username/password setup
- **Notes**: Make, edit, and delete notes that auto-save
- **Tags**: Add tags to keep things organized
- **Search**: Find notes by title or content
- **Filter**: Click tags to filter your notes
- **Trash**: Move stuff to trash and delete forever if needed
- **Themes**: Light or dark mode toggle
- **Mobile Friendly**: Works on your phone too
- **Local Storage**: No server needed, everything stays in your browser

## Getting Started

## Project Layout

```
src/
├── components/          # UI bits like buttons and cards
│   ├── ConfirmModal.jsx (Yet to be implemented)
│   ├── FilterChips.jsx  (Yet to be implemented)
│   ├── Navbar.jsx
│   ├── NoteCard.jsx   (Yet to be implemented)
│   ├── ProtectedRoute.jsx  (Yet to be implemented)
│   ├── SaveIndicator.jsx  (Yet to be implemented)
│   ├── SearchBar.jsx  (Yet to be implemented)
│   └── TagInput.jsx  (Yet to be implemented)
├── context/             # State management stuff
│   ├── AuthContext.jsx ✅
│   ├── NotesContext.jsx ✅
│   └── ThemeContext.jsx ✅
├── hooks/               # Handy React hooks
│   ├── useDebounce.js
│   └── useDebouncedSave.js
├── pages/               # Main pages
│   ├── Dashboard.jsx ✅
│   ├── Login.jsx ✅
│   ├── Signup.jsx ✅
│   └── Trash.jsx ✅
├── utils/               # Helper functions
│   └── storage.js ✅
├── App.css              # Global styles ✅
├── App.jsx              # Main app ✅
├── main.jsx             # Entry point ✅
└── styles.css           # More styles ✅
```

### What You Need

- Node.js (16+)
- npm or yarn

### Let's Get It Running

1. Grab the code:
   ```bash
   git clone https://github.com/marlingeshwar26brillio/react-app-notes
   cd notely
   ```

2. Install stuff:
   ```bash
   npm i
   ```

3. Fire it up:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser and you're good to go!

## How to Use It

### First Things First

- Sign up with a username and password
- Log in to see your notes

### Making Notes

- Hit "+ New Note" to start fresh
- Add a title and some content
- Throw in tags (hit Enter or click Add)
- It saves automatically as you type

### Organizing Stuff

- **Search**: Type in the search bar to find notes
- **Filter**: Click on tag buttons to show only those notes
- **Tags**: Use them to group your notes

### Managing Notes

- **Edit**: Click any note to change it
- **Delete**: Send to trash with the Delete button
- **Trash**: Go to the trash page to bring back or nuke notes

### Theme Switch

- Click the Theme button in the top bar to go light or dark

## Tech Stack

- **React**: For the UI magic
- **Vite**: Fast build and dev server
- **React Router**: Handles page switching
- **Local Storage**: Keeps your data safe locally
- **CSS**: Custom styles that look good
- **ESLint**: Keeps the code clean
ps://vitejs.dev/)
- Inspired by clean, modern designs
