import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";
import Link from "next/link";

interface ComponentProps {
  place: Place;
  weather: Weather;
  temperatureUnit?: TemperatureUnit;
}

export default function WeatherItem({ place, weather, temperatureUnit = "C" }: ComponentProps) {
  const date = dayjs.unix(weather.dt);
  return (
    <Link href={`/details/${place.place_id}`} className="bg-white border border-neutral-200 rounded-md shadow-md flex justify-between items-start px-4 py-2">
      <div className="flex-1 mr-3">
        <h3 className="text-sm font-semibold mb-1">{place.display_name}</h3>
        <p className="text-neutral-500 text-sm">{date.format("h:mm A")}</p>
      </div>
      <div className="flex items-center flex-shrink-0 pt-2">
        <figure className="bg-neutral-400 rounded-full inline-block w-6 h-6 mr-2"></figure>
        <span>{displayKelvinToUnit(weather.main.temp, temperatureUnit)}</span>
      </div>
    </Link>
  );
}
