export default function SaveIndicator({ status }) {
  if (status === "saving") {
    return (
      <span className="text-sm font-medium text-blue-500 flex items-center gap-1">
        {" "}
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>{" "}
        Saving...{" "}
      </span>
    );
  }
  return (
    <span className="text-sm font-medium text-green-600 flex items-center gap-1">
      {" "}
      ✓ Saved{" "}
    </span>
  );
}
