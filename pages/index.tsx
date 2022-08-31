import { useState, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { DisplayElectricCars } from "../src/components/DisplayElectricCars";
import electricCars from "../public/api/cars.json";
import useSWR from "swr";
import { Car } from "../src/models/car";
import { useGetCars } from "../src/hooks/useGetCars";

const HomePage: NextPage = () => {
    const { cars, isLoading, isError } = useGetCars();

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error</p>;

    return (
        <>
            <Head>
                <title>Volvo Electric Cars</title>
            </Head>
            <DisplayElectricCars cars={cars} />
        </>
    );
};

export default HomePage;
