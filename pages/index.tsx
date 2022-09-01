import { NextPage } from "next";
import Head from "next/head";
import { DisplayElectricCar } from "../src/components/DisplayElectricCar";
import { Carousel } from "../src/components/Carousel";
import { useGetCars } from "../src/hooks/useGetCars";
import useWindowSize from "../src/hooks/useWindowSize";
import { Breakpoints } from "../src/styles/BreakPoints";
import { Spinner } from "vcc-ui";
import styled from "styled-components";
import { BackAndForwardButtons } from "../src/components/BackAndForwardButtons";

const HomePage: NextPage = () => {
    const { cars, isLoading, isError } = useGetCars();
    const { width } = useWindowSize();
    const breakpoint = Number(Breakpoints.TabletLandscape.split("rem")[0]) * 16;

    if (isLoading) return <Spinner size={32} />;
    if (isError) return <p>Error</p>;

    return (
        <PageWrapper>
            <Head>
                <title>Volvo Electric Cars</title>
            </Head>
            <Carousel>
                <DisplayElectricCar cars={cars} />
            </Carousel>
            {width > breakpoint ? <BackAndForwardButtons /> : null}
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

    .back-and-forward-button {
        align-self: flex-end;
    }
`;
