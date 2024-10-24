import { WeatherDetails, WeatherDetailsSubscribe } from "@/components/weathers";
import { fetchWeather, fetchWeatherForecast } from "@/fetchers/weathers";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: {
    lat: string;
    lon: string;
  };
}

export default async function DetailsPage({ params: { lat, lon } }: PageProps) {
  const coord = { lat: +lat, lon: +lon }
  const [weather, weatherForecast] = await Promise.all([
    await fetchWeather(lat, lon),
    await fetchWeatherForecast(lat, lon)
  ]);
  return (
    <div className="max-w-6xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
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
      <WeatherDetails coord={coord} weather={weather} weatherForecast={weatherForecast} />
    </div>
  );
}

export async function generateMetadata({ params: { lat, lon } }: PageProps): Promise<Metadata> {
  let weather: Weather;
  try {
    weather = await fetchWeather(lat, lon);
  } catch (error) {
    return {
      title: "Not found | WeatherApp"
    }
  }
  return {
    title: `${weather.name}, ${weather.sys.country} | WeatherApp`,
    description: `Weather forecasting for ${weather.name}`,
  };
}
