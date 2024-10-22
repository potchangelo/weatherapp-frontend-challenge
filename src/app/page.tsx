import { WeatherItem } from "@/components/weathers"
import places from "@/tests/mockup-data/places.json";
import weathers from "@/tests/mockup-data/weathers.json";

export default function HomePage() {
  return (
    <main className="max-w-5xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {places.map((place, index) => {
          const weather = weathers[index];
          return <WeatherItem key={place.place_id} place={place} weather={weather} temperatureUnit="K" />
        })}
      </div>
    </main>
  );
}
