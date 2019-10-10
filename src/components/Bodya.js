import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Image from './Image';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


export default function Bodya() {
    
    const [spaceImage, setSpaceImage] = useState([]);
    const [changeDate, setChangeDate] = useState([]);

useEffect(() => {
    axios
    //.get('https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY')

    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${changeDate}`)
    .then(response => {
        const info = response.data;
        console.log('response', info);
        setSpaceImage(info);
    })
}, []);

return (
    <div className='container'>

        
<Card>


<Image test = {spaceImage}/>

       <CardBody>
       
          <CardTitle>{spaceImage.title}</CardTitle>
          <CardSubtitle>{spaceImage.date}</CardSubtitle>
          <CardText>{spaceImage.explanation}explantionexplantionexplantionexplantionexplantion</CardText>
          <Button>Button</Button>
        </CardBody>

     

    </Card>

    </div>
)
}