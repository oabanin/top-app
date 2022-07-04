import React, {useEffect, useState, KeyboardEvent} from 'react';
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
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return <span
                className={cn(s.star, {[s.filled]: index < currentRating, [s.editable]: isEditable})}
                onClick={() => onClick(index + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => isEditable && handleSpace(index + 1, e)}
                onMouseEnter={() => changeDisplay(index + 1)} >
                <StarIcon  tabIndex={isEditable ? 0 : -1}
                    />
            </span>
        });
        setRatingArray(updatedArray);
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    }


    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<HTMLSpanElement>) => {
        if (!isEditable || !setRating) {
            return;
        }
        if (e.code !== "Space") return;

        setRating(i);
    }


    return (
        <div {...rest}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    );
};

export default Rating;
