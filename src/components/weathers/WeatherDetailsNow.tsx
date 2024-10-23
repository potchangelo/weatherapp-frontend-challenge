import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";
import Image from "next/image";

interface ComponentProps {
  weather: Weather;
  temperatureUnit?: TemperatureUnit;
}

export default function WeatherDetailsNow({ weather, temperatureUnit = "C" }: ComponentProps) {
  const weatherDate = dayjs.unix(weather.dt);
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h3 className="text-xl font-semibold mb-2">{weather.name}, {weather.sys.country}</h3>
      <p className="text-sm mb-1">{weatherDate.format("dddd, D MMMM YYYY")}</p>
      <p className="text-sm mb-6">{weatherDate.format("h:mm A")}</p>
      <div className="flex flex-col items-center mb-6">
        <figure className="rounded-full w-28 h-28">
          <Image
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            width={112}
            height={112}
            alt={weather.weather[0].main}
          />
        </figure>
        <h2 className="text-5xl font-semibold mb-1">{displayKelvinToUnit(weather.main.temp, temperatureUnit)}</h2>
        <p>{weather.weather[0].main}</p>
        <p className="text-neutral-500 text-sm">{weather.weather[0].description}</p>
      </div>
      <div className="flex justify-between">
        <div className="text-neutral-500 text-sm">
          MIN {displayKelvinToUnit(weather.main.temp_min, temperatureUnit)}
        </div>
        <div className="text-neutral-500 text-sm">
          MAX {displayKelvinToUnit(weather.main.temp_max, temperatureUnit)}
        </div>
      </div>
    </div>
  );
}
