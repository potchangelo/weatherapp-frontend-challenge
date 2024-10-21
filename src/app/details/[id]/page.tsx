import { WeatherDetailsForecast, WeatherDetailsMore, WeatherDetailsNow } from "@/components/weathers";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  }
}

export default async function DetailsPage({ params: { id } }: PageProps) {
  return (
    <div className="max-w-4xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <WeatherDetailsNow />
        <div className="space-y-4">
          <WeatherDetailsForecast />
          <WeatherDetailsMore />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
  return {
    title: `Location ${id} | WeatherApp`,
    description: `Weather forecasting for location ${id}`,
  }
}
