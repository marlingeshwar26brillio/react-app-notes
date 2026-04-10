import { useEffect, useState } from "react";

export default function useDebouncedSave(value, delay, saveFn) {
  const [status, setStatus] = useState("saved");

  useEffect(() => {
    setStatus("saving");
    const t = setTimeout(() => {
      saveFn(value);
      setStatus("saved");
    }, delay);

    return () => clearTimeout(t);
  }, [value]);

  return status; // "saving" | "saved"
}