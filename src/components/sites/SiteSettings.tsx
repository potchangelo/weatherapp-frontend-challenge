"use client";

import { useDropdownAPI } from "@/helpers/hooks";
import { useCoordsStore, useSettingsStore } from "@/zustand-store";
import { Settings } from "lucide-react";

const temperatureUnits = [
  { title: "Celsius", value: "C" },
  { title: "Fahrenheit", value: "F" },
  { title: "Kelvin", value: "K" },
]

export default function SiteSettings() {
  const removeAllCoords = useCoordsStore(state => state.removeAllCoords);
  const selectedTemperatureUnit = useSettingsStore(state => state.temperatureUnit);
  const setTemperatureUnit = useSettingsStore(state => state.setTemperatureUnit);
  const { isOpen, setIsOpen, toggleIsOpen, ref } = useDropdownAPI();

  function onResetClick() {
    removeAllCoords();
    setIsOpen(false);
  }

  return (
    <div className="relative z-10" ref={ref}>
      <div className={`rounded-t-md rounded-b-none flex justify-center items-center w-8 h-8 cursor-pointer ${isOpen ? "bg-neutral-800" : ""}`} onClick={toggleIsOpen}>
        <Settings className={`w-4 h-4 relative z-40`} color={`${isOpen ? "white" : "currentColor"}`} />
      </div>
      {isOpen && (
        <div className="bg-white rounded-md rounded-tr-none border border-neutral-800 border-t-8 shadow-lg text-sm w-52 absolute top-[calc(100%)] right-0 z-30">
          <div className="p-3 pb-0">
            <h6 className="font-semibold mb-1">Temperature unit</h6>
            {temperatureUnits.map(temperatureUnit => (
              <p key={temperatureUnit.value}>
                <label>
                  <input
                    type="radio"
                    name="temperatureUnit"
                    value={temperatureUnit.value}
                    checked={temperatureUnit.value === selectedTemperatureUnit}
                    onChange={event => setTemperatureUnit(event.target.value as TemperatureUnit)}
                  /> {temperatureUnit.title}
                </label>
              </p>
            ))}
          </div>
          <div className="p-3">
            <h6 className="font-semibold mb-1">Reset all subscriptions</h6>
            <p>
              <button
                className="text-white bg-red-500 hover:bg-red-600 rounded-md text-xs font-semibold block w-full whitespace-nowrap transition-colors h-7 px-3 py-1"
                onClick={onResetClick}
              >
                Reset data
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
