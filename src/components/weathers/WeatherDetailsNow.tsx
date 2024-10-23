import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";

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
        <figure className="bg-neutral-400 rounded-full w-28 h-28 mb-3"></figure>
        <h2 className="text-5xl font-semibold mb-1">{displayKelvinToUnit(weather.main.temp, temperatureUnit)}</h2>
        <p className="text-sm">{weather.weather[0].main}, {weather.weather[0].description}</p>
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
