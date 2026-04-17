const fs = require('fs');

const noteEditCode = 'import { useState } from "react";\n' +
'import TagInput from "./TagInput";\n' +
'import SaveIndicator from "./SaveIndicator";\n' +
'import useDebouncedSave from "../hooks/useDebouncedSave";\n' +
'import { useNotes } from "../context/NotesContext";\n' +
'\n' +
'export default function NoteEditModal({ note, isOpen, onClose }) {\n' +
'  const { updateNote } = useNotes();\n' +
'  const [draft, setDraft] = useState(note);\n' +
'\n' +
'  const status = useDebouncedSave(draft, 500, (data) => {\n' +
'    if (data.title.trim()) {\n' +
'      updateNote(note.id, data);\n' +
'    }\n' +
'  });\n' +
'\n' +
'  const isTitleEmpty = !draft.title.trim();\n' +
'  const hasChanged = JSON.stringify(draft) !== JSON.stringify(note);\n' +
'\n' +
'  if (!isOpen || !note) return null;\n' +
'\n' +
'  return (\n' +
'    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">\n' +
'      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-96 overflow-hidden flex flex-col">\n' +
'        {/* Header */}\n' +
'        <div className="border-b border-slate-200 p-6 flex items-center justify-between gap-4">\n' +
'          <div className="flex-1">\n' +
'            <h2 className="text-2xl font-bold text-slate-900">Edit Note</h2>\n' +
'          </div>\n' +
'          <button\n' +
'            onClick={onClose}\n' +
'            className="shrink-0 w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors text-xl"\n' +
'          >\n' +
'            ✕\n' +
'          </button>\n' +
'        </div>\n' +
'        {/* Content */}\n' +
'        <div className="flex-1 overflow-y-auto p-6 space-y-4">\n' +
'          {/* Title */}\n' +
'          <div>\n' +
'            <label className="block text-sm font-semibold text-slate-700 mb-2">\n' +
'              Title *\n' +
'            </label>\n' +
'            <input\n' +
'              value={draft.title}\n' +
'              placeholder="Note title (required)"\n' +
'              onChange={e => setDraft({ ...draft, title: e.target.value })}\n' +
'              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"\n' +
'            />\n' +
'            {isTitleEmpty && hasChanged && (\n' +
'              <p className="text-xs text-red-500 mt-1">Title is required</p>\n' +
'            )}\n' +
'          </div>\n' +
'          {/* Content */}\n' +
'          <div>\n' +
'            <label className="block text-sm font-semibold text-slate-700 mb-2">\n' +
'              Content\n' +
'            </label>\n' +
'            <textarea\n' +
'              value={draft.content}\n' +
'              placeholder="Write your note..."\n' +
'              onChange={e => setDraft({ ...draft, content: e.target.value })}\n' +
'              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none h-32"\n' +
'            />\n' +
'          </div>\n' +
'          {/* Tags */}\n' +
'          <div>\n' +
'            <label className="block text-sm font-semibold text-slate-700 mb-2">\n' +
'              Tags\n' +
'            </label>\n' +
'            <TagInput\n' +
'              tags={draft.tags || []}\n' +
'              onChange={(tags) => setDraft({ ...draft, tags })}\n' +
'            />\n' +
'          </div>\n' +
'        </div>\n' +
'        {/* Footer */}\n' +
'        <div className="border-t border-slate-200 bg-slate-50 p-6 flex items-center justify-between gap-4">\n' +
'          <div className="flex items-center gap-2">\n' +
'            {!isTitleEmpty && <SaveIndicator status={status} />}\n' +
'          </div>\n' +
'          <button\n' +
'            onClick={onClose}\n' +
'            className="px-6 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold transition-colors"\n' +
'          >\n' +
'            Done\n' +
'          </button>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  );\n' +
'}';

fs.writeFileSync('src/components/NoteEditModal.jsx', noteEditCode);
console.log('✓ NoteEditModal.jsx fixed');
