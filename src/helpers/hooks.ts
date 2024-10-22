import { useEffect, useRef, useState } from "react";

export function useDropdownAPI() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  function onOutsideClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onOutsideClick);
    return () => {
      document.removeEventListener('click', onOutsideClick);
    };
  }, []);

  return { isOpen, ref, setIsOpen, toggleIsOpen };
}
