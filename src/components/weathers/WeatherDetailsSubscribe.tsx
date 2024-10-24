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
    <button className="text-sm" onClick={onClick}>
      {subscribedCoord ? (
        <>
          <Minus className="inline-block w-4 h-4" />
          <span>Unsubscribe</span>
        </>
      ) : (
        <>
          <Plus className="inline-block w-4 h-4" />
          <span>Subscribe</span>
        </>
      )}
    </button>
  );
}
