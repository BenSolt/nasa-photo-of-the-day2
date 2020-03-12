import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Image from './Image';



import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


export default function Nasacard(props) {

    let separate = new Date ();
    console.log(separate)
    console.log({separate})
    let month = separate.getUTCMonth( +1);
    let day = separate.getUTCDate();
    let year = separate.getUTCFullYear();
  
    let date = `${year}-${month}-${day}`
  

    const [newDate, setNewDate] = useState(date)
    const [spaceImage, setSpaceImage] = useState([]);
    
//.get('https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY')

useEffect(() => {
    axios
    
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${newDate}`)
    .then(response => {
        const info = response.data;
        console.log('response', info);
        setSpaceImage(info);
    })
}, [newDate]);

return (
<div className='container'>

    <div className='Img'>
        <Image test = {spaceImage}/>
    </div>
        
<Card>

        <div className='Input'>
            <label>
                  Choose Date: <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)}  />
            </label>
            <input type="submit" value="Submit" />

        </div>
              

   
       <CardBody>
     
          <CardTitle>{spaceImage.title}</CardTitle>
          <CardSubtitle>{spaceImage.date}</CardSubtitle>
          <CardText>{spaceImage.explanation}</CardText>
          
        </CardBody>

              

    </Card>

    </div>
)
}