import { kelvinToUnit } from "@/helpers/functions";

interface ComponentProps {
  place: Place;
  weather: Weather;
}

export default function WeatherDetailsNow({ place, weather }: ComponentProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h3 className="text-xl font-semibold mb-2">{place.display_name}</h3>
      <p className="text-sm mb-1">Thursday, 22 May 2019</p>
      <p className="text-sm mb-6">7:30 AM</p>
      <div className="flex flex-col items-center mb-6">
        <figure className="bg-neutral-400 rounded-full w-28 h-28 mb-3"></figure>
        <h2 className="text-5xl font-semibold mb-1">{kelvinToUnit(weather.main.temp, "C")}&deg;C</h2>
        <p className="text-sm">{weather.weather[0].main}</p>
      </div>
      <div className="flex justify-between">
        <div className="text-neutral-500 text-sm">
          MIN {kelvinToUnit(weather.main.temp_min, "C")}&deg;C
        </div>
        <div className="text-neutral-500 text-sm">
          MAX {kelvinToUnit(weather.main.temp_max, "C")}&deg;C
        </div>
      </div>
    </div>
  );
}
