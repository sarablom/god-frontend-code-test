import { NextPage } from "next";
import Head from "next/head";
import { Button } from "vcc-ui";
import Link from "next/link";

const ShopPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Volvo Electric Cars -- Learn</title>
            </Head>
            <h1>Shop</h1>
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </>
    );
};

export default ShopPage;
