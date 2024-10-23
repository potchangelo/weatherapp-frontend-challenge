"use client";

import { fetchWithQueryParams } from "@/fetchers/general";
import { useDropdownAPI } from "@/helpers/hooks";
import { ArrowLeft, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SiteSearchBoxItem from "./SiteSearchBoxItem";
import { usePlacesStore } from "@/helpers/zustand-store";

export default function SiteSearchBox() {
  const [q, setQ] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);
  const selectedPlaces = usePlacesStore(state => state.places);
  const addPlace = usePlacesStore(state => state.addPlace);
  const { isOpen, setIsOpen, ref } = useDropdownAPI();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  async function getSearchPlaces(q: string) {
    try {
      const responsePlaces = await fetchWithQueryParams<Place[]>("/api/search", { "q": q });
      setPlaces(responsePlaces);
    } catch (error) {
      console.error(error);
    }
  }

  function onPlaceSelect(place: Place) {
    addPlace(place);
    setIsOpen(false);
    setQ("");
  }

  // Call Search API route handler, with typing delay about 500ms
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (q.length >= 3) {
      timeoutRef.current = setTimeout(() => {
        getSearchPlaces(q);
      }, 500);
    }
    else {
      setPlaces([]);
    }
  }, [q]);

  return (
    <div className={`relative z-20 ${isOpen ? "-ml-10 sm:ml-0 -mr-10 sm:mr-0" : ""}`} ref={ref}>
      <input
        className={`flex w-full h-8 rounded-md border border-neutral-600 focus:border-neutral-800 focus:outline focus:outline-2 focus:outline-neutral-800 text-sm pl-3 pr-8 py-2 relative z-40 ${isOpen ? "pl-8" : ""}`}
        type="search"
        value={q}
        onChange={event => setQ(event.target.value)}
        onFocus={_ => setIsOpen(true)}
        placeholder="search"
      />
      {isOpen && (
        <div className="flex justify-center items-center w-8 h-8 absolute top-0 left-0 z-40 cursor-pointer" onClick={_ => setIsOpen(false)}>
          <ArrowLeft className="w-4 h-4" />
        </div>
      )}
      <div className="flex justify-center items-center w-8 h-8 absolute top-0 right-0 z-40 pointer-events-none">
        <Search className="w-4 h-4" />
      </div>
      {isOpen && places.length > 0 && (
        <div className="bg-white rounded-md border border-neutral-800 shadow-lg absolute top-0 left-0 right-0 pt-8 z-30">
          <div className="max-h-64 overflow-y-auto">
            {places.map((place, index) => (
              <SiteSearchBoxItem
                key={`${index}_${place.lat}_${place.lon}`}
                place={place}
                selectedPlaces={selectedPlaces}
                onItemClick={onPlaceSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
