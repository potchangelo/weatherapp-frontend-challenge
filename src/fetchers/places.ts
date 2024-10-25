import { fetchWithQueryParams } from "./general";

export async function fetchPlaces(q: string) {
  return await fetchWithQueryParams<Place[]>(`${process.env.NEXT_PUBLIC_API_ABSOLUTE_BASE}/api/places`, { q: q });
}
