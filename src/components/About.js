import React from 'react';

import styled from 'styled-components'

const AboutContainer = styled.div`
    margin: 40px 0; 
    p {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 18px;
    }
    span {
        font-weight: 700; 
    }
`

function Aboutpage() {
    return (
        <AboutContainer>

            <p>Fruit emporium is founded on a very simple principle: <span>Fruit is good</span>. </p>

            <p>
                We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p>
        </AboutContainer>
    )



}


export default Aboutpage;