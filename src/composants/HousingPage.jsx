import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import housings from '../database.json';
import Collapse from '../composants/collapse';
import Gallery from './Gallery';
import RatingScale from './RatingScale';
import '../Assets/css/Housing.css' 

const HousingPage = () => {

    const { id } = useParams()
    const housing = housings.find(housing => housing.id === id)
    return (
        <section key={housing.id} className='housing_page'>
            <Gallery 
                img={housing.pictures} 
            />

            <header className='housing_page_header'>
                <article className='housing_page_header_infos'>
                    <h1 className='housing_page_header_infos_title'>{housing.title}</h1>
                    <h2 className='housing_page_header_infos_subtitle'>{housing.location}</h2>
                    <div className='housing_page_header_infos_tags'>
                        {housing.tags.map((tag, i) => (
                            <p key={i} className='housing_page_header_infos_tags_tag'>{tag}</p>
                        ))}
                    </div>
                </article>
            
                <article className='housing_page_header_hoster'>
                    <div className='housing_page_header_hoster_infos'>
                        <p className='housing_page_header_hoster_infos_name'>{housing.host.name}</p>
                        <img src={housing.host.picture} alt='host-cover' className='housing_page_header_hoster_infos_img'/>
                    </div>
                    <RatingScale
                        scaleValue={housing.rating}
                    />
                </article>
            </header>

            <article className='housing_page_collapses'>
                <div className='housing_page_collapses_content'>
                    <Collapse
                        title='Description'
                        content={housing.description}
                    />
                </div>
                <div className='housing_page_collapses_content'>
                    <Collapse
                        title='Équipements'
                        content={housing.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li> {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </section>
    )
}

export default HousingPage;