import React from 'react';
import styled from 'styled-components'
import ListingGrid from "./ListingGrid"
import { items } from '../data';

const fruitArray = Object.values(items)

const HomeContainer = styled.div`
    margin: 40px 0px; 
    p {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 18px;
    }

    span {
        font-weight: 700;
        font-family: "Montserrat";
        font-size: 18px; 
    }
    
`

const Homepage = () => {
    return (
        <HomeContainer>
            <p>Fruit emporium sells the finest fruits from this world and beyond.
            </p>
            <span>Browse items: </span>
            <ListingGrid itemData={fruitArray} />
        </HomeContainer>
    )


}


export default Homepage;