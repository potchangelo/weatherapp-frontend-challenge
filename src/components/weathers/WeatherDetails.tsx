"use client";

import { useEffect, useState } from "react";
import WeatherDetailsForecast from "./WeatherDetailsForecast";
import WeatherDetailsMore from "./WeatherDetailsMore";
import WeatherDetailsNow from "./WeatherDetailsNow";
import { fetchWithQueryParams } from "@/fetchers/general";
import { usePlacesStore } from "@/helpers/zustand-store";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import WeatherDetailsSubscribe from "./WeatherDetailsSubscribe";

interface ComponentProps {
  lat: string;
  lon: string;
}

export default function WeatherDetails({ lat, lon }: ComponentProps) {
  const places = usePlacesStore(state => state.places);
  const place = places.find(p => p.lat === lat && p.lon === lon);
  const [weather, setWeather] = useState<Weather>();
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>();

  async function getPlaceWeather() {
    const [weather, weatherForecast] = await Promise.all([
      await fetchWithQueryParams<Weather>("/api/weather", {"lat": lat, "lon": lon }),
      await fetchWithQueryParams<WeatherForecast>("/api/weather-forecast", {"lat": lat, "lon": lon })
    ])
    console.log(weather);
    console.log(weatherForecast);
    setWeather(weather);
    setWeatherForecast(weatherForecast);
  }

  useEffect(() => {
    getPlaceWeather();
  }, [lat, lon]);

  if (!place) notFound();

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
          <WeatherDetailsSubscribe place={place}  />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {weather && (
          <>

            <WeatherDetailsNow place={place} weather={weather} />
            <div className="space-y-4">
              <WeatherDetailsForecast items={weatherForecast?.list ?? []} />
              <WeatherDetailsMore weather={weather} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
