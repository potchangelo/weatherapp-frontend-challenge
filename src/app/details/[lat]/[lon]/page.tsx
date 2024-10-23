import { WeatherDetails } from "@/components/weathers";
import { fetchWithQueryParams } from "@/fetchers/general";
import { Metadata } from "next";

interface PageProps {
  params: {
    lat: string;
    lon: string;
  }
}

export default function DetailsPage({ params: { lat, lon } }: PageProps) {
  return (
    <div className="max-w-6xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
      <WeatherDetails lat={lat} lon={lon} />
    </div>
  );
}

export async function generateMetadata({ params: { lat, lon } }: PageProps): Promise<Metadata> {
  const weather = await fetchWithQueryParams<Weather>(`${process.env.ROUTE_HANDLER_API_ABSOLUTE_BASE ?? ""}/api/weather`, {"lat": lat, "lon": lon });
  return {
    title: `${weather.name}, ${weather.sys.country} | WeatherApp`,
    description: `Weather forecasting for ${weather.name}`,
  }
}
