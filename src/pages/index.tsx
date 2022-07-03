import Head from "next/head";
import {Htag} from "../components/Htag/Htag";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Htag tag="h1">Tag</Htag>
            <Button arrow="down" appearance="primary">Butn</Button>
            <Button arrow={"right"} appearance="ghost" onClick={console.log}>Butn</Button>
        </>
    )
}
