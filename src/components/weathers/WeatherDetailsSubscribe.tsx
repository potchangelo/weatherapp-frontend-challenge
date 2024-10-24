"use client";

import { useCoordsStore } from "@/zustand-store/coords";
import { Minus, Plus } from "lucide-react";

interface ComponentProps {
  coord: Coord;
}

export default function WeatherDetailsSubscribe({ coord }: ComponentProps) {
  const subscribedCoords = useCoordsStore(state => state.coords);
  const addCoord = useCoordsStore(state => state.addCoord);
  const removeCoord = useCoordsStore(state => state.removeCoord);

  function onClick() {
    if (subscribedCoord) {
      removeCoord(coord);
    }
    else {
      addCoord(coord);
    }
  }

  const subscribedCoord = subscribedCoords.find(c => c.lat === coord.lat && c.lon === coord.lon);

  return (
    <button className={`rounded-md text-xs font-semibold block whitespace-nowrap transition-colors h-7 px-3 py-1 ${subscribedCoord ? "bg-white border border-neutral-400 hover:border-neutral-600" : "text-white bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600"}`} onClick={onClick}>
      {subscribedCoord ? (
        <>
          <Minus className="inline-block w-4 h-4 mr-1" />
          <span>Unsubscribe</span>
        </>
      ) : (
        <>
          <Plus className="inline-block w-4 h-4 mr-1" />
          <span>Subscribe</span>
        </>
      )}
    </button>
  );
}
