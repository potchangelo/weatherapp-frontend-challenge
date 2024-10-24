import { fetchWithQueryParams } from "@/fetchers/general";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get query params
  const { searchParams } = request.nextUrl;
  const queryParams = Object.fromEntries(searchParams.entries());
  queryParams["key"] = process.env.PLACE_API_KEY ?? "";
  queryParams["accept-language"] = "en";

  // Fetch
  const responseJson = await fetchWithQueryParams<Place[]>(process.env.PLACE_API_ENDPOINT ?? "", queryParams);
  return NextResponse.json(responseJson);
}
