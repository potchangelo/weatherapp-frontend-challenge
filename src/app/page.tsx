import { WeatherItems } from "@/components/weathers"

export default function HomePage() {
  return (
    <main className="max-w-5xl min-h-screen m-auto p-4 pt-20 md:p-8 md:pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <WeatherItems />
      </div>
    </main>
  );
}
