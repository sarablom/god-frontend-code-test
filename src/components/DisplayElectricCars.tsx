import { useState, useEffect } from "react";
import { Car } from "../models/car";

export const DisplayElectricCars = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function runEffect() {
            const response = await fetch("api/cars.json", {
                headers: {
                    "Content-Type": "application/json",

                    Accept: "application/json",
                },
            });
            const data = await response.json();

            if (response.ok) {
                setCars(data);
                setIsLoading(false);
            } else {
                setIsError(true);
                setIsLoading(false);
            }
        }

        runEffect();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error...</p>;
    }

    return (
        <ol>
            <li>Hej</li>
            {cars &&
                cars.length > 0 &&
                cars.map((car: Car) => <li key={car.id}>{car.modelName}</li>)}
        </ol>
    );
};
