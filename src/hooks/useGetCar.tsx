import useSWR from "swr";
import { Car } from "../models/car";

interface CarsData {
    cars: Car[];
    isLoading: boolean;
    error:
        | {
              message: string;
          }
        | undefined;
}

interface SingleCarData {
    car: Car;
    isLoading: boolean;
    error:
        | {
              message: string;
          }
        | undefined;
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

    if (error) {
        error.message =
            "Oh no, something went wrong and we cannot access the information right now. Please try again later or try reloading the page.";
    }

    return {
        car: filteredCar,
        isLoading: !error && !data,
        error,
    };
};

export const useGetCars = (): CarsData => {
    const { data, error } = useSWR(`/api/cars.json`, fetcher);

    if (error) {
        error.message =
            "Oh no, something went wrong and we cannot access the information right now. Please try again later or try reloading the page.";
    }

    return {
        cars: data,
        isLoading: !error && !data,
        error,
    };
};
