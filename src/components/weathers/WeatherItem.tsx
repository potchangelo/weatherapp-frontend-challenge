import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";
import Link from "next/link";

interface ComponentProps {
  weather: Weather;
  coord: Coord;
  temperatureUnit?: TemperatureUnit;
}

export default function WeatherItem({ weather, coord, temperatureUnit = "C" }: ComponentProps) {
  const date = dayjs.unix(weather.dt);
  return (
    <Link
      className="bg-white border border-neutral-200 rounded-md shadow-md flex justify-between items-start px-4 py-2"
      href={`/details/${coord.lat}/${coord.lon}`}
    >
      <div className="flex-1 mr-3">
        <h3 className="text-sm font-semibold mb-1">{weather.name}, {weather.sys.country}</h3>
        <p className="text-neutral-500 text-sm">{date.format("h:mm A")}</p>
      </div>
      <div className="flex items-center flex-shrink-0 pt-2">
        <figure className="bg-neutral-400 rounded-full inline-block w-6 h-6 mr-2"></figure>
        <span>{displayKelvinToUnit(weather.main.temp, temperatureUnit)}</span>
      </div>
    </Link>
  );
}
