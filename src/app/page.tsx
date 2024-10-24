import { WeatherItems } from "@/components/weathers"
import dayjs from "dayjs";

export default function HomePage() {
  const currentDate = dayjs();
  return (
    <main className="max-w-6xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
      <h2 className="text-lg font-semibold">Subscribed places</h2>
      <p className="text-neutral-500 text-xs mb-4">Latest updated: {currentDate.format("D MMMM YYYY, h:mm A")}</p>
      <WeatherItems />
    </main>
  );
}
