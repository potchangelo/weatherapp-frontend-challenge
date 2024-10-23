import { usePlacesStore } from "@/helpers/zustand-store";
import { Minus, Plus } from "lucide-react";

interface ComponentProps {
  place: Place;
}

export default function WeatherDetailsSubscribe({ place }: ComponentProps) {
  const selectedPlaces = usePlacesStore(state => state.places);
  const addPlace = usePlacesStore(state => state.addPlace);
  const removePlace = usePlacesStore(state => state.removePlace);

  function onClick() {
    if (selectedPlace) {
      removePlace(place);
    }
    else {
      addPlace(place);
    }
  }

  const selectedPlace = selectedPlaces.find(p => p.lat === place.lat && p.lon === place.lon);

  return (
    <button className="text-sm" onClick={onClick}>
      {selectedPlace ? (
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
