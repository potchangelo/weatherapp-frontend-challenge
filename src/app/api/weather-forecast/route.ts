import { fetchWithQueryParams } from "@/fetchers/general";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get query params
  const { searchParams } = request.nextUrl;
  const queryParams = Object.fromEntries(searchParams.entries());
  queryParams["appId"] = process.env.WEATHER_API_KEY ?? "";
  queryParams["cnt"] = "8";

  // Fetch
  const responseJson = await fetchWithQueryParams<WeatherForecast>(
    process.env.WEATHER_FORECAST_API_ENDPOINT ?? "",
    queryParams
  );
  return NextResponse.json(responseJson);
}
