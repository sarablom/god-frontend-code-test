import { NextPage } from "next";
import Head from "next/head";
import { ElectricCarCard } from "../src/components/ElectricCarCard";
import { useGetCars } from "../src/hooks/useGetCar";
import { Spinner, Text } from "vcc-ui";
import styled from "styled-components";
import { FilterSearchBar } from "../src/components/FIlterSearchBar";
import { Carousel } from "../src/components/Carousel";
import { useEffect, useState } from "react";
import { Car } from "../src/models/car";
import { AlertMessage } from "../src/components/AlertMessage";

const HomePage: NextPage = () => {
    const { cars, isLoading, error } = useGetCars();
    const [filteredCars, setFilteredCars] = useState<Car[] | []>([]);

    useEffect(() => {
        if (cars) setFilteredCars(cars);
    }, [cars]);

    if (isLoading) return <Spinner size={32} />;
    if (error)
        return (
            <AlertMessage isVisible>
                <Text
                    variant="columbus"
                    extend={() => ({
                        fontWeight: "500",
                    })}
                >
                    Oh no, something went wrong and we cannot access the
                    Electric Cars right now. Please try again later or try
                    reloading the page.
                </Text>
            </AlertMessage>
        );

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
