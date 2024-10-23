// import places from "@/tests/mockup-data/places.json";
// import weathers from "@/tests/mockup-data/weathers.json";
// import weatherForecasts from "@/tests/mockup-data/weather-forecasts.json";
import { WeatherDetails } from "@/components/weathers";
import { Metadata } from "next";

interface PageProps {
  params: {
    lat: string;
    lon: string;
  }
}

export default function DetailsPage({ params: { lat, lon } }: PageProps) {
  return (
    <div className="max-w-4xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
      <WeatherDetails lat={lat} lon={lon} />
    </div>
  );
}

export async function generateMetadata({ params: { lat, lon } }: PageProps): Promise<Metadata> {
  // const place = places.find(p => p.place_id === id);
  // const title = `${place?.display_name ?? "Not found"}`;
  return {
    title: `${lat} | WeatherApp`,
    description: `Weather forecasting for ${lat}`,
  }
}
