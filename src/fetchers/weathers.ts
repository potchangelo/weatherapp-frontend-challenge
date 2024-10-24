import { fetchWithQueryParams } from "./general";

export async function fetchWeather(lat: string | number, lon: string | number) {
  return await fetchWithQueryParams<Weather>(
    `${process.env.NEXT_PUBLIC_API_ABSOLUTE_BASE}/api/weather`,
    { "lat": `${lat}`, "lon": `${lon}` }
  );
}

export async function fetchWeatherForecast(lat: string | number, lon: string | number) {
  return await fetchWithQueryParams<WeatherForecast>(
    `${process.env.NEXT_PUBLIC_API_ABSOLUTE_BASE}/api/weather-forecast`,
    { "lat": `${lat}`, "lon": `${lon}` }
  );
}
