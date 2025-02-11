import { NextPage } from "next";
import Head from "next/head";
import { ElectricCarCard } from "../src/components/ElectricCarCard";
import { useGetEntities } from "../src/hooks/useApiRequest";
import { Spinner, Text } from "vcc-ui";
import styled from "styled-components";
import { FilterSearchBar } from "../src/components/FIlterSearchBar";
import { Carousel } from "../src/components/Carousel";
import { useEffect, useState } from "react";
import { Car } from "../src/models/car";
import { AlertMessage } from "../src/components/AlertMessage";

const HomePage: NextPage = () => {
    const {
        dataEntities: cars,
        isLoading,
        error,
    } = useGetEntities<Car>("/api/cars.json");
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);

    useEffect(() => {
        if (cars) setFilteredCars(cars);
    }, [cars]);

    if (isLoading) return <Spinner size={32} />;
    if (error) return <AlertMessage isVisible message={error.message} />;

    return (
        <PageWrapper>
            <Head>
                <title>Volvo Electric Cars</title>
            </Head>
            <FilterSearchBar cars={cars} setFilteredCars={setFilteredCars} />
            <Carousel widthOfChildren={366}>
                {filteredCars.map(car => (
                    <ElectricCarCard key={car.id} car={car} />
                ))}
            </Carousel>
            {filteredCars.length === 0 && (
                <Text
                    variant="columbus"
                    extend={({ theme }) => ({
                        fontSize: "1rem",
                        color: theme.color.foreground.secondary,
                        fontWeight: "500",
                        marginTop: "2rem",
                    })}
                >
                    Sorry, we couldn&apos;t find a car with that body type
                </Text>
            )}
        </PageWrapper>
    );
};

export default HomePage;

const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
`;
