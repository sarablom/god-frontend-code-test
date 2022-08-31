import { NextPage } from "next";
import Head from "next/head";
import { DisplayElectricCars } from "../src/components/DisplayElectricCars";
import { useGetCars } from "../src/hooks/useGetCars";
import { Spinner, Icon, Flex } from "vcc-ui";
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
            <DisplayElectricCars cars={cars} />
            <Icon type="more-48" color="primary" />
            <Flex extend={{ flexDirection: "row" }}>
                <Icon type="mediacircled-previous-48" />
                <Icon type="mediacircled-next-48" />
            </Flex>
        </PageWrapper>
    );
};

export default HomePage;

const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;

    img.ej {
        align-self: center;
    }
`;
