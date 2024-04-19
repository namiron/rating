import React, { useState } from 'react';
import rating from '../modules/rating.module.scss'
import { FaStar } from "react-icons/fa6";

const StarsRating = ({ count }) => {
    //----------------------------------
    const ratingArray = Array(count).fill(<FaStar className={rating.iconStar} />)
    const [currentItem, setCurrentItem] = useState(0)

    //----------------------------------

    return (
        <div className={rating.contentBox}>
            <div className={rating.contentInner}>
                {
                    ratingArray.map((el, i) => {
                        return <div
                            onClick={() => setCurrentItem(i)}
                            key={i}
                            className={rating.iconElement}
                            style={i <= currentItem ? {
                                color: '#F79E1B',
                                overflow: 'hidden',
                            } : {}}>
                            {el}
                        </div>
                    })
                }
                <span className={rating.quantityRating}>{currentItem + 1} Stars</span>
            </div>
        </div>
    )
}

export default StarsRating;
