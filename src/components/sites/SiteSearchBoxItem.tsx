import { MapPin } from "lucide-react";

interface ItemComponentProps {
  place: Place;
  onClick: (place: Place) => void;
}

export default function SiteSearchBoxItem({ place, onClick }: ItemComponentProps) {
  return (
    <div className="block p-2 hover:bg-neutral-100 cursor-pointer" onClick={_ => onClick(place)}>
      <div className="grid grid-cols-[20px_1fr] gap-1 items-start">
        <div className="flex justify-center items-center">
          <MapPin className="w-4 h-4" />
        </div>
        <div className="text-sm">
          {place.display_name}
        </div>
      </div>
    </div>
  );
}
