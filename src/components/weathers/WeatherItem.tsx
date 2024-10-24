import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Image from "next/image";
import Link from "next/link";

interface ComponentProps {
  weather: Weather;
  coord: Coord;
  temperatureUnit?: TemperatureUnit;
}

dayjs.extend(utc);

export default function WeatherItem({ weather, coord, temperatureUnit = "C" }: ComponentProps) {
  const currentDate = dayjs().utcOffset(weather.timezone / 3600);
  return (
    <Link
      className="bg-white border border-neutral-200 rounded-md shadow-md flex justify-between items-start px-4 py-2"
      href={`/details/${coord.lat}/${coord.lon}`}
    >
      <div className="flex-1 mr-3">
        <h3 className="text-sm font-semibold mb-1">{weather.name}, {weather.sys.country}</h3>
        <p className="text-neutral-500 text-xs">{currentDate.format("D MMMM YYYY, h:mm A")}</p>
      </div>
      <div className="flex items-center flex-shrink-0">
        <figure className="rounded-full inline-block w-10 h-10">
          <Image
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            width={40}
            height={40}
            alt={weather.weather[0].main}
          />
        </figure>
        <span className="text-sm">{displayKelvinToUnit(weather.main.temp, temperatureUnit)}</span>
      </div>
    </Link>
  );
}
