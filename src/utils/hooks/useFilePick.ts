import { useState, useCallback, useRef } from "react";

export const useFilePick = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return {};
};
