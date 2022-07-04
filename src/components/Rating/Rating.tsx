import React, {useEffect, useState} from 'react';
import s from './Rating.module.scss';
import {RatingProps} from "./Rating.props";
import StarIcon from './rating.svg';
import cn from "classnames";

const Rating = ({isEditable = false, rating, setRating, ...rest}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
            return <StarIcon className={cn(s.star, {[s.filled]: index < currentRating})}/>
        });
        setRatingArray(updatedArray);
    }

    return (
        <div className={cn(s.p, {})} {...rest}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    );
};

export default Rating;
