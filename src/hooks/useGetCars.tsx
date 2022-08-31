import useSWR from "swr";
import { Car } from "../models/car";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useGetCars() {
    const { data, error } = useSWR(`/api/cars.json`, fetcher);

    return {
        cars: data as Car[],
        isLoading: !error && !data,
        isError: error,
    };
}