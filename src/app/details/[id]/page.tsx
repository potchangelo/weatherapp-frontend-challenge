import places from "@/tests/mockup-data/places.json";
import weathers from "@/tests/mockup-data/weathers.json";
import { WeatherDetailsForecast, WeatherDetailsMore, WeatherDetailsNow } from "@/components/weathers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  }
}

export default async function DetailsPage({ params: { id } }: PageProps) {
  const place = places.find(p => p.place_id === id);
  if (!place) notFound();
  const weather = weathers.find(w => w.coord.lat === +place.lat && w.coord.lon === +place.lon)
  if (!weather) notFound();
  return (
    <div className="max-w-4xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <WeatherDetailsNow place={place} weather={weather} />
        <div className="space-y-4">
          <WeatherDetailsForecast />
          <WeatherDetailsMore weather={weather} />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
  const place = places.find(p => p.place_id === id);
  const title = `${place?.display_name ?? "Not found"}`;
  return {
    title: `${title} | WeatherApp`,
    description: `Weather forecasting for ${title}`,
  }
}
