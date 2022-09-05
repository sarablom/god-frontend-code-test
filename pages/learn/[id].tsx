import { useRouter } from "next/router";
import { NextPage } from "next";
import Head from "next/head";
import { Button, Spinner, Text } from "vcc-ui";
import Link from "next/link";
import { useGetSingleCar } from "../../src/hooks/useGetCar";
import { AlertMessage } from "../../src/components/AlertMessage";

const LearnPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { car, error, isLoading } = useGetSingleCar(id);
    if (isLoading) return <Spinner size={32} />;
    if (error) return <AlertMessage isVisible message={error.message} />;

    return (
        <>
            <Head>
                <title>Volvo Electric Cars -- Learn</title>
            </Head>
            {car && <h1>Learn more about {car.modelName}</h1>}
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </>
    );
};

export default LearnPage;
