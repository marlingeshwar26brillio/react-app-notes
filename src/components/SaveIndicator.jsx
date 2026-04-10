export default function SaveIndicator({ status }) {
  if (status === "saving") return <span className="saving">Saving...</span>;
  return <span className="saved">Saved ✓</span>;
}