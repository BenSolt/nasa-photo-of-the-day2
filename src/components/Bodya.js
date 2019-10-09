import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Image from './Image';



export default function Bodya() {
    
    const [spaceImage, setSpaceImage] = useState([]);
    

useEffect(() => {
    axios
    //.get('https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY')
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
        const info = response.data;
        console.log('response', info);
        setSpaceImage(info);
    })
}, []);

return (
    <div className='container'>

        


    <div className='images'>

        <Image imgg = {spaceImage}/>
        

        <h1>{spaceImage.title}</h1>
        <h2>{spaceImage.date}</h2>
        <p>{spaceImage.explanation}</p> 
        

    </div>

    </div>
)
}