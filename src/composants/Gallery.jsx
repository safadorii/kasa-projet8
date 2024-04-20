import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../Assets/css/Gallery.css'
const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

const Gallery = (props) => {
 // Déclaration d'une variable d'état pour stocker l'index du slide actuel
    const [slideIdx, setSlideIdx] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector('.slideshow_container img');
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }
// Fonction pour passer au slide suivant
    const Next = () => {
        if(slideIdx === props.img.length - 1){
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }
// Fonction pour revenir au slide précédent
    const Prev = () => {
        if(slideIdx === 0){
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    return (
        <div className='slideshow'>
            <div className='slideshow_container' style={{transform: `translateX(-${slideIdx* imgSize() }px)`}}>
                {props.img.map((picture, i) => 
                    <img className='slideshow_container_img' alt='banniere-page-logement' src={picture} key={i} />
                )}   
            
            </div>
            
            {props.img.length > 1 && <>
            <div className='slideshow_controls'>
                <i className='slideshow_controls_chevron' onClick={Prev}>{angleLeft}</i>
                <i className='slideshow_controls_chevron' onClick={Next}>{angleRight}</i>
            </div>
            <div className='slideshow_idx'>{slideIdx + 1} / {props.img.length}</div>
            </>}
        </div>
    )
}

export default Gallery;