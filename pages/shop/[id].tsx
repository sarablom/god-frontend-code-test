import { useRouter } from "next/router";
import { NextPage } from "next";
import Head from "next/head";
import { Button, Spinner } from "vcc-ui";
import Link from "next/link";
import { useGetSingleEntityById } from "../../src/hooks/useGetCar";
import { AlertMessage } from "../../src/components/AlertMessage";
import { Car } from "../../src/models/car";

const ShopPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const {
        dataEntity: car,
        error,
        isLoading,
    } = useGetSingleEntityById<Car>(id, "/api/cars.json");
    if (isLoading) return <Spinner size={32} />;
    if (error) return <AlertMessage isVisible message={error.message} />;

    return (
        <>
            <Head>
                <title>Volvo Electric Cars -- Shop</title>
            </Head>
            {car && <h1>Buy {car.modelName}</h1>}
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </>
    );
};

export default ShopPage;
