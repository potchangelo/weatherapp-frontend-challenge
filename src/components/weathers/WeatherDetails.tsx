"use client";

import { useEffect, useState } from "react";
import WeatherDetailsForecast from "./WeatherDetailsForecast";
import WeatherDetailsMore from "./WeatherDetailsMore";
import WeatherDetailsNow from "./WeatherDetailsNow";
import { fetchWithQueryParams } from "@/fetchers/general";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import WeatherDetailsSubscribe from "./WeatherDetailsSubscribe";
import { useSettingsStore } from "@/zustand-store";

interface ComponentProps {
  lat: string;
  lon: string;
}

export default function WeatherDetails({ lat, lon }: ComponentProps) {
  const [weather, setWeather] = useState<Weather>();
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();
  const temperatureUnit = useSettingsStore(state => state.temperatureUnit);

  // TODO : Move to page server component
  async function getPlaceWeather() {
    const [weather, weatherForecast] = await Promise.all([
      await fetchWithQueryParams<Weather>("/api/weather", { "lat": lat, "lon": lon }),
      await fetchWithQueryParams<WeatherForecast>("/api/weather-forecast", { "lat": lat, "lon": lon })
    ])
    setWeather(weather);
    setWeatherForecast(weatherForecast);
  }

  useEffect(() => {
    getPlaceWeather();
  }, [lat, lon]);

  if (!weather || !weatherForecast) return null;

  const coord = { lat: +lat, lon: +lon };

  return (
    <>
      <div className="flex justify-between mb-2">
        <div>
          <Link className="text-sm" href="/">
            <ChevronLeft className="inline-block w-4 h-4" />
            <span>Back to homepage</span>
          </Link>
        </div>
        <div>
          <WeatherDetailsSubscribe coord={coord} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <WeatherDetailsNow weather={weather} temperatureUnit={temperatureUnit} />
        <div className="space-y-4">
          <WeatherDetailsForecast weatherForecast={weatherForecast} temperatureUnit={temperatureUnit} />
          <WeatherDetailsMore weather={weather} />
        </div>
      </div>
    </>
  );
}
