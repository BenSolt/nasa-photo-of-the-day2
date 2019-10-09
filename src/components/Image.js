import React from 'react';

import styled from 'styled-components';


//Image Size
const ImgNasa = styled.img`
width: 100%
height: auto;
`;


const Image = props => {
    console.log(props)
    return(
        <div>



        <ImgNasa alt="Nasa Daily Image" src={props.imgg.hdurl}/>

        </div>
    )
}

export default Image