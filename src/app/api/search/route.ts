import { fetchWithQueryParams } from "@/fetchers/general";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const queryParams = Object.fromEntries(searchParams.entries());
  queryParams["key"] = process.env.PLACE_API_KEY ?? "";
  const responseJson = await fetchWithQueryParams<Place[]>(process.env.PLACE_API_ENDPOINT ?? "", queryParams);
  return NextResponse.json(responseJson);
}
