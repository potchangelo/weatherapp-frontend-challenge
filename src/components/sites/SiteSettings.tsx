"use client";

import { useDropdownAPI } from "@/helpers/hooks";
import { usePlacesStore } from "@/helpers/zustand-store";
import { Settings } from "lucide-react";

export default function SiteSettings() {
  const removeAllPlaces = usePlacesStore(state => state.removeAllPlaces);
  const { isOpen, toggleIsOpen, ref } = useDropdownAPI();

  return (
    <div className={`rounded-t-md rounded-b-none flex justify-center items-center w-8 h-8 relative z-10 cursor-pointer ${isOpen ? "bg-neutral-800" : ""}`} ref={ref} onClick={toggleIsOpen}>
      <Settings className={`w-4 h-4 relative z-40`} color={`${isOpen ? "white" : "currentColor"}`} />
      {isOpen && (
        <div className="bg-white rounded-md rounded-tr-none border border-neutral-800 border-t-8 shadow-lg text-sm w-52 absolute top-[calc(100%)] right-0 z-30">
          <div className="p-3 pb-0">
            <h6 className="font-semibold mb-1">Temperature unit</h6>
            <p>
              <label>
                <input type="radio" name="tempunit" /> Celsius
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="tempunit" /> Fahrenheit
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="tempunit" /> Kelvin
              </label>
            </p>
          </div>
          <div className="p-3">
            <h6 className="font-semibold mb-1">Reset all subscription</h6>
            <p>
              <button onClick={removeAllPlaces}>Reset data</button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
