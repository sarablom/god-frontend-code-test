import useSWR from "swr";
import { Car } from "../models/car";

interface ReturnData {
    cars: Car[];
    isLoading: boolean;
    isError: boolean;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useGetCars(): ReturnData {
    const { data, error } = useSWR(`/api/cars.json`, fetcher);

    return {
        cars: data,
        isLoading: !error && !data,
        isError: error,
    };
}
