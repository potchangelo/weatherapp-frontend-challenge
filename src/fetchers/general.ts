export async function fetchWithQueryParams<T>(endpointUrl: string, queryParams: Record<string, string>): Promise<T> {
  const urlSearchParams = new URLSearchParams();
  Object.entries(queryParams).forEach(kv => {
    if (kv[1]) urlSearchParams.set(kv[0], kv[1]);
  });
  return await fetch(`${endpointUrl}?${urlSearchParams.toString()}`, {
    next: {
      revalidate: 3600,
    },
  }).then(res => res.json());
}
