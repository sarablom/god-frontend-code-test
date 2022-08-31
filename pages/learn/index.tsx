import { NextPage } from "next";
import Head from "next/head";
import { Button } from "vcc-ui";
import Link from "next/link";

const LearnPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Volvo Electric Cars -- Learn</title>
            </Head>
            <h1>Learn</h1>
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </>
    );
};

export default LearnPage;
