import { NextPage } from "next";
import Head from "next/head";
import { ElectricCarCard } from "../src/components/ElectricCarCard";
import { useGetCars } from "../src/hooks/useGetCar";
import { Spinner } from "vcc-ui";
import styled from "styled-components";
import { FilterSearchBar } from "../src/components/FIlterSearchBar";
import { Carousel } from "../src/components/Carousel";
import { useState } from "react";

const HomePage: NextPage = () => {
    const { cars, isLoading, isError } = useGetCars();
    const [filteredCars, setFilteredCars] = useState(cars);

    if (isLoading) return <Spinner size={32} />;
    if (isError) return <p>Error</p>;

    return (
        <PageWrapper>
            <Head>
                <title>Volvo Electric Cars</title>
            </Head>
            <FilterSearchBar
                cars={cars}
                filteredCars={filteredCars}
                setFilteredCars={setFilteredCars}
            />
            <Carousel>
                {filteredCars.map(car => (
                    <ElectricCarCard key={car.id} car={car} />
                ))}
            </Carousel>
        </PageWrapper>
    );
};

export default HomePage;

const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
`;
