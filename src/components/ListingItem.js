import React from "react"
import styled from "styled-components"


const FruitCont = styled.div`
    background-color: white;
    height: 200px; 
    width: 85%;
    max-width: 210px; 
    min-width: 190px; 
    text-align: center;
    margin: 0 auto;
    position: relative;
    margin-top: 50px; 
    border-radius: 10px; 
    box-shadow: 0px 0px 8px -5px rgba(0,0,0,0.25);
    cursor: pointer;

`

const FruitImg = styled.img`
    border-radius: 10px; 
    width: 120px; 
    position: absolute;
    top: -20px; 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`

const FruitTitle = styled.h3`
    font-weight: 700; 
    position: absolute;
    bottom: 45px; 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`

const Divider = styled.div`
    position: absolute;
    bottom: 48px; 
    width: 50px; 
    height: 5px; 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background-color: #E6E6E6;
    border-radius: 40%; 
`
const LatinText = styled.p`
    color: grey;
    font-style: italic;
    font-size: 12px !important; 
    position: absolute;
    bottom: 12px; 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`

const ListingItem = ({ item }) => {
    return (
        <FruitCont>
            <FruitImg src={item.imageSrc} />
            <FruitTitle> {item.name} </FruitTitle>
            <Divider />
            <LatinText>{item.latinName}</LatinText>
        </FruitCont>

    )
}

export default ListingItem;