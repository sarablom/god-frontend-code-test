import useSWR from "swr";
import { Car } from "../models/car";

interface ReturnData {
    car: Car;
    isLoading: boolean;
    isError: boolean;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useGetSingleCar(id: string | string[] | undefined): ReturnData {
    const { data, error } = useSWR(`/api/cars.json`, fetcher);

    let filteredCar;

    if (data) {
        filteredCar = data.find((car: Car) => {
            return car.id === id;
        });
    }

    return {
        car: filteredCar as Car,
        isLoading: !error && !data,
        isError: error,
    };
}
