import React, {useMemo} from 'react';
import {StarIcon} from "./StarIcon";

interface IStarComponentProps {
    total: number;
    starSize?: number;
}

export const StarComponent = ({total, starSize = 20}: IStarComponentProps) => {
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    return <div style={{display: "flex"}}>
        {Array(total).fill(null).map((_, index) =>
            <div style={{width: starSize}} key={index}
                 onMouseEnter={()=>setHoverRating(index+1)}
                 onClick={()=>setRating(index+1)}
                 onMouseLeave={() => setHoverRating(0)}
            >
                <StarIcon filled={index < rating || index < hoverRating} key={index}/>
            </div>
        )}
    </div>
};
