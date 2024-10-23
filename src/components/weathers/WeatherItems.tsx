"use client";

import { fetchWithQueryParams } from "@/fetchers/general";
import { useCoordsStore } from "@/zustand-store/coords";
import { useEffect, useState } from "react";
import WeatherItem from "./WeatherItem";

export default function WeatherItems() {
  const [weathers, setWeathers] = useState<Weather[]>([]);
  const coords = useCoordsStore(state => state.coords);

  async function getPlaceWeathers() {
    const weathers = await Promise.all(
      coords.map(c => (
        fetchWithQueryParams<Weather>("/api/weather", { "lat": `${c.lat}`, "lon": `${c.lon}` })
      ))
    );
    setWeathers(weathers);
  }

  useEffect(() => {
    getPlaceWeathers();
  }, [coords]);

  return (
    <>
      {coords.length === weathers.length && coords.map((coord, index) => {
        const weather = weathers[index];
        return (
          <WeatherItem key={`${weather.id}_${index}`} weather={weather} urlCoord={coord} />
        );
      })}
    </>
  );
}
