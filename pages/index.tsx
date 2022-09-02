import { NextPage } from "next";
import Head from "next/head";
import { DisplayElectricCar } from "../src/components/DisplayElectricCar";
import { useGetCars } from "../src/hooks/useGetCar";
import { Spinner } from "vcc-ui";
import styled from "styled-components";

const HomePage: NextPage = () => {
    const { cars, isLoading, isError } = useGetCars();

    if (isLoading) return <Spinner size={32} />;
    if (isError) return <p>Error</p>;

    return (
        <PageWrapper>
            <Head>
                <title>Volvo Electric Cars</title>
            </Head>
            <DisplayElectricCar cars={cars} />          
        </PageWrapper>
    );
};

export default HomePage;

const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
`;
