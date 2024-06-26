import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />
const starGrey = <FontAwesomeIcon icon={faStar} />

const RatingScale = (props) => {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='housing_page_header_hoster_ratings'>
            {range.map((rangeElem,i) =>
                scaleValue >= rangeElem ? 
                    <span  key={i} className='housing_page_header_hoster_ratings_star'>{star}</span> 
                    : <span key={i} className='housing_page_header_hoster_ratings_star housing_page_header_hoster_ratings_star_grey'>{starGrey}</span>
            )}
        </div>
    )
}

export default RatingScale;