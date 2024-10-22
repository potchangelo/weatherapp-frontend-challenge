"use client";

import { useDropdownAPI } from "@/helpers/hooks";
import { MapPin, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SiteSearchBox() {
  const [q, setQ] = useState("");
  const { isOpen, setIsOpen, ref } = useDropdownAPI();

  return (
    <div className={`relative z-20 ${isOpen ? "-ml-10 sm:ml-0 -mr-10 sm:mr-0" : ""}`} ref={ref}>
      <input
        className="flex w-full h-8 rounded-md border border-neutral-600 focus:outline-none text-sm px-3 py-2 relative z-40"
        type="search"
        value={q}
        onChange={event => setQ(event.target.value)}
        onFocus={_ => setIsOpen(true)}
        placeholder="search"
      />
      <div className=" flex justify-center items-center w-8 h-8 absolute top-0 right-0 z-40 pointer-events-none">
        <Search className="w-4 h-4" />
      </div>
      {isOpen && (
        <div className="bg-white rounded-md border border-neutral-800 shadow-lg absolute top-0 left-0 right-0 pt-8 z-30">
          <SiteSearchBoxItem onClick={() => setIsOpen(false)} />
          <SiteSearchBoxItem onClick={() => setIsOpen(false)} />
          <SiteSearchBoxItem onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

interface ItemComponentProps {
  onClick: () => void;
}

function SiteSearchBoxItem({ onClick }: ItemComponentProps) {
  return (
    <Link className="block p-2 hover:bg-neutral-100" href="/details/323557479889" onClick={onClick}>
      <div className="grid grid-cols-[20px_1fr] gap-1">
        <div className="flex justify-center items-center">
          <MapPin className="w-4 h-4" />
        </div>
        <div className="text-sm">
          Tokyo, Japan
        </div>
      </div>
    </Link>
  );
}
