import { NextPage } from "next";
import Head from "next/head";
import { Button, Spinner } from "vcc-ui";
import Link from "next/link";
import { useGetSingleCar } from "../../src/hooks/useGetSingleCar";

const LearnPage: NextPage = () => {
    const id = window.location.pathname.split("/")[2];
    const { car, isError, isLoading } = useGetSingleCar(id);

    if (isLoading) return <Spinner size={32} />;
    if (isError) return <p>Error</p>;

    return (
        <>
            <Head>
                <title>Volvo Electric Cars -- Learn</title>
            </Head>
            <h1>Learn more about {car.modelName}</h1>
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </>
    );
};

export default LearnPage;
