import React from 'react';
import styles from './heroCard.module.css'

interface HeroCardProps {
    name: string;
    age: number;
    image: string;
    lightsaberColors: string[];
    isDark: boolean;
}

const HeroCard: React.FC<HeroCardProps> = ({ name, age, image, lightsaberColors, isDark }) => {
    return (
        <div className={`${styles.heroCard} ${isDark ? styles.dark : styles.light}`}>
            <h4>{name}</h4>
            <p>Age: {age}</p>
            <img width={200} src={image} alt={name} />
            <p>
                Lightsaber colors:{" "}
                {lightsaberColors.map((color, index) => (
                    <span
                        key={index}
                        className={styles.lightsaberColor}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </p>
        </div>
    );
};

export default HeroCard;