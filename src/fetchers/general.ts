export async function fetchWithQueryParams<T>(endpointUrl: string, queryParams: Record<string, string>): Promise<T> {
  const urlSearchParams = new URLSearchParams();
  Object.entries(queryParams).forEach(kv => {
    if (kv[1]) urlSearchParams.set(kv[0], kv[1]);
  });
  const apiFullUrl = `${endpointUrl}?${urlSearchParams.toString()}`;
  return await fetch(apiFullUrl).then(res => res.json());
}
