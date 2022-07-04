import Head from "next/head";
import {Htag} from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import {useEffect, useState} from "react";
import Rating from "../components/Rating/Rating";

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);


    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Htag tag="h1">{counter}</Htag>
            <Button onClick={() => setCounter(item => item + 1)} arrow="down" appearance="primary">+1</Button>
            <Button arrow={"right"} appearance="ghost" onClick={console.log}>Butn</Button>
            <P size="L">Large</P>
            <P>Medium</P>
            <P size="S">Small</P>
            <Tag size="S">Small Tag</Tag>
            <Tag>Medium</Tag>
            <Tag color="red">Medium</Tag>
            <Rating rating={2} />
        </>
    )
}
