import React from 'react';

import styled from 'styled-components';


//Image Size
const ImgNasa = styled.img`
width: 50%
height: 100%;

`;


const Image = props => {
    console.log(props)
    return(
        <div>



        <ImgNasa alt="Nasa Daily Image" src={props.test.hdurl}/>

        </div>
    )
}

export default Image