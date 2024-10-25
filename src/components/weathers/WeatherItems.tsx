"use client";

import { fetchWeather } from "@/fetchers/weathers";
import { useCoordsStore } from "@/zustand-store/coords";
import { useSettingsStore } from "@/zustand-store/settings";
import WeatherItem from "./WeatherItem";
import useSWR from "swr";

export default function WeatherItems() {
  const coords = useCoordsStore(state => state.coords);
  const temperatureUnit = useSettingsStore(state => state.temperatureUnit);
  const {
    data: weathers = [],
    isLoading,
    error,
  } = useSWR(["weathers", coords], () => Promise.all(coords.map(c => fetchWeather(c.lat, c.lon))), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
    keepPreviousData: true,
  });

  if (isLoading && weathers.length === 0) return <p className="text-sm">Loading data ...</p>;
  if (error) {
    return (
      <div className="text-red-600 border border-red-600 rounded-md text-sm w-full p-3">
        Server error, please try reload again.
      </div>
    );
  }
  if (weathers.length === 0) {
    return (
      <div className="border border-neutral-400 rounded-md text-sm w-full p-3">
        Have no subscribed places. please search & select some places to be in subscribed list.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {coords.map((coord, index) => {
        if (index >= weathers.length) return null;
        const weather = weathers[index];
        return (
          <WeatherItem
            key={`${weather.id}_${index}`}
            weather={weather}
            coord={coord}
            temperatureUnit={temperatureUnit}
          />
        );
      })}
    </div>
  );
}
