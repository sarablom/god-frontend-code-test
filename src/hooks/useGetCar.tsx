import useSWR from "swr";
import { Car } from "../models/car";

interface CarsData {
    cars: Car[];
    isLoading: boolean;
    error: {} | undefined;
}

interface SingleCarData {
    car: Car;
    isLoading: boolean;
    error: {} | undefined;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useGetSingleCar = (
    id: string | string[] | undefined
): SingleCarData => {
    const { data, error } = useSWR(`/api/cars.json`, fetcher);

    let filteredCar;

    if (data) {
        filteredCar = data.find((car: Car) => {
            return car.id === id;
        });
    }

    return {
        car: filteredCar,
        isLoading: !error && !data,
        error,
    };
};

export const useGetCars = (): CarsData => {
    const { data, error } = useSWR(`/api/cars.json`, fetcher);

    return {
        cars: data,
        isLoading: !error && !data,
        error,
    };
};
