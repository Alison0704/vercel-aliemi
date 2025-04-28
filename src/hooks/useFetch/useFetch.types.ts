// /hooks/useFetch/useFetch.types.ts
export interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
