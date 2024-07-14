import React from 'react';
import  styles from './starWarsGallery.module.css';
import HeroCard from '../heroCard/HeroCard';
import heroes from '../../data/data';


const StarWarsGallery: React.FC = () => {
    return (
        <div className={styles.galleryContainer}>
            {heroes.map((hero, index) => (
                <HeroCard key={index} {...hero} />
            ))}
        </div>
    );
};

export default StarWarsGallery;