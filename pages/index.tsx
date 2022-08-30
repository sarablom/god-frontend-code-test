import { useState, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { DisplayElectricCars } from "../src/components/DisplayElectricCars";
import electricCars from "../public/api/cars.json";
import { Car } from "../src/models/car";

const HomePage: NextPage = ({ cars }: any) => {
    const [carsToDisplay, setCarsToDisplay] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (cars && cars.length > 0) {
            setCarsToDisplay(cars);
            setIsLoading(false);
            setIsError(false);
        } else {
            setIsError(true);
            setIsLoading(false);
        }
    }, [cars]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error...</p>;
    }

    return (
        <>
            <Head>
                <title>Volvo Electric Cars</title>
            </Head>

            {carsToDisplay.length > 0 &&
                carsToDisplay.map((car: Car) => (
                    <div key={car.id}>{car.modelName}</div>
                ))}
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            cars: electricCars,
        },
    };
};

export default HomePage;
