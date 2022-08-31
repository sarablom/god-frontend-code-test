import useSWR from "swr";

const fetcher = (resource: string) => fetch(resource).then(res => res.json());

export function useGetCars() {
    const { data, error } = useSWR(`/api/cars.json`, fetcher);

    return {
        cars: data,
        isLoading: !error && !data,
        isError: error,
    };
}
