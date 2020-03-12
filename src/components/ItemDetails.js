import React from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import { items, sellers, } from '../data';

const fruitArray = Object.values(items)

const sellersArray = Object.values(sellers)


const FruitImage = styled.img`
    border-radius: 10px; 
    width: 540px; 
    margin-right: 45px; 
    
`

const ItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

const ContentContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    
`

const FruitTitle = styled.div`
h1{
    font-weight: 700; 
    text-align: left;
    margin: 0; 
    padding: 0; 
}
p {
    font-style: italic;
    margin: 0; 
    color: grey;
}
`

const ProdDesc = styled.div` 
    p {
        
        color: black;
    }
    span {
        font-style: italic;
        font-weight: 800;
    }

`
const BuyBtn = styled.button`
    width: 300px; 
    height: 65px;
    border-radius: 14px;  
    background-color: #307CBD;
    font-family: "Montserrat";
    color: white;
    font-size: 18px; 
    cursor: pointer;
`

const SellerCont = styled.div`
    display: flex; 
    align-items: center;
    margin-bottom: 40px; 

    p{
        font-size: 18px; 
    }
    span {
        font-weight: bold;
    }
    
`

const SellerImg = styled.img`
    width: 50px; 
    border-radius: 50%;
    margin-right: 20px; 
`



const ItemDetails = () => {
    const { itemId } = useParams();
    console.log(itemId)
    let itemArray = fruitArray.filter(fruitItem => {
        return fruitItem.id === itemId;
    })
    let item = itemArray[0]

    let sellerArray = sellersArray.filter(seller => {
        return seller.id === item.sellerId;
    })
    let seller = sellerArray[0];



    return (
        <ItemContainer>
            <FruitImage src={item.imageSrc} />
            <ContentContainer>
                <FruitTitle>
                    <h1>{item.name} </h1>
                    <p>{item.latinName}</p>
                </FruitTitle>
                <ProdDesc>
                    <p>{item.description}</p>
                    <em>Product of <span>{item.countryOfOrigin}</span> </em>
                </ProdDesc>
                <BuyBtn>${item.price} - Buy now</BuyBtn>
                <SellerCont>
                    <SellerImg src={seller.avatarSrc} />
                    <p>Sold by: <span>{seller.storeName}</span></p>

                </SellerCont>
            </ContentContainer>

        </ItemContainer>

    )


};


export default ItemDetails;