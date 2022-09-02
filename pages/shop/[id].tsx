import { useRouter } from "next/router";
import { NextPage } from "next";
import Head from "next/head";
import { Button, Spinner, Text } from "vcc-ui";
import Link from "next/link";
import { useGetSingleCar } from "../../src/hooks/useGetCar";
import { AlertMessage } from "../../src/components/AlertMessage";

const ShopPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { car, error, isLoading } = useGetSingleCar(id);
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
                    information right now. Please try again later or try
                    reloading the page.
                </Text>
            </AlertMessage>
        );

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
