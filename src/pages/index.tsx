import Head from "next/head";
import {Htag} from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import {useEffect, useState} from "react";
import Rating from "../components/Rating/Rating";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu, firstCategory}: HomeProps): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

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
            <Rating setRating={setRating} isEditable rating={rating}/>
            <ul>
                {menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
    return {props: {menu, firstCategory}};
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
}