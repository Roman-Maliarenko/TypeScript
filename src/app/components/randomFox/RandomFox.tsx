import React, { useState, useEffect } from 'react';
import MyButton from '../myButton/MyButton';

interface IFoxData {
    image: string;
}

const RandomFox = () => {
    const[fox, setFox] = useState<IFoxData>({
        image:''
    });

    const fetchFox = () => {
        fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data => setFox(data));
    };

    useEffect(() => {
        fetchFox();
    }, []);

    const handleFox = () => {
        fetchFox();
    };

    return (
        <div>
            <h3>Fox</h3>
            <MyButton name='fox' onClick={handleFox}/>
            <img width={120} src={fox.image} />
        </div>
    );
}

export default RandomFox;