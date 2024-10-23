import { MapPinCheck, MapPinPlus } from "lucide-react";

interface ItemComponentProps {
  place: Place;
  selectedPlaces?: Place[];
  onItemClick: (place: Place) => void;
}

export default function SiteSearchBoxItem({ place, selectedPlaces = [], onItemClick }: ItemComponentProps) {
  const selectedPlace = selectedPlaces.find(p => (
    p.lat === place.lat && p.lon === place.lon
  ));

  function onClick() {
    if (selectedPlace) return;
    onItemClick(place);
  }

  return (
    <div className={`block p-2 ${selectedPlace ? "text-neutral-400 bg-neutral-200" : "bg-white hover:bg-neutral-100 cursor-pointer"}`} onClick={onClick}>
      <div className="grid grid-cols-[20px_1fr] gap-1 items-start">
        <div className="flex justify-center items-center">
          {selectedPlace ? (
            <MapPinCheck className="w-4 h-4" />
          ): (
            <MapPinPlus className="w-4 h-4" />
          )}
        </div>
        <div className="text-sm">
          {place.display_name}
        </div>
      </div>
    </div>
  );
}
