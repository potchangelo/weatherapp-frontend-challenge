"use client";

import { WeatherItem } from "@/components/weathers"
import { fetchWithQueryParams } from "@/fetchers/general";
import { usePlacesStore } from "@/helpers/zustand-store";
import { useEffect, useState } from "react";

interface PlaceWeather {
  place: Place;
  weather: Weather;
}

export default function WeatherItems() {
  const [placeWeathers, setPlaceWeathers] = useState<PlaceWeather[]>([]);
  const places = usePlacesStore(state => state.places);

  async function getPlaceWeathers() {
    const weathers = await Promise.all(
      places.map(p => (
        fetchWithQueryParams<Weather>("/api/weather", { "lat": p.lat, "lon": p.lon })
      ))
    );
    const placeWeathers: PlaceWeather[] = places.map((place, index) => {
      const weather = weathers[index];
      return { place, weather }
    });
    setPlaceWeathers(placeWeathers);
  }

  useEffect(() => {
    getPlaceWeathers();
  }, [places]);

  return (
    <>
      {placeWeathers.map((placeWeather, index) => {
        const { place, weather } = placeWeather;
        return <WeatherItem key={`${place.place_id}_${place.lat}_${place.lon}`} place={place} weather={weather} />
      })}
    </>
  );
}
