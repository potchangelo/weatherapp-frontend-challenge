"use client";

import { useSettingsStore } from "@/zustand-store/settings";
import WeatherDetailsForecast from "./WeatherDetailsForecast";
import WeatherDetailsMore from "./WeatherDetailsMore";
import WeatherDetailsNow from "./WeatherDetailsNow";

interface ComponentProps {
  weather: Weather;
  weatherForecast: WeatherForecast;
}

export default function WeatherDetails({ weather, weatherForecast }: ComponentProps) {
  const temperatureUnit = useSettingsStore(state => state.temperatureUnit);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
      <WeatherDetailsNow weather={weather} temperatureUnit={temperatureUnit} />
      <div className="space-y-4">
        <WeatherDetailsForecast weatherForecast={weatherForecast} temperatureUnit={temperatureUnit} />
        <WeatherDetailsMore weather={weather} />
      </div>
    </div>
  );
}
