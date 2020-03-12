import React from 'react';
import styled from 'styled-components'
import { sellers, items } from '../data';
import { useParams } from 'react-router-dom'

let sellersArray = Object.values(sellers)
let itemsArray = Object.values(items)

console.log(itemsArray)

const Wrapper = styled.div`
    margin-top: 50px; 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 32px;
`

const FruitContainer = styled.div`
display: flex;
justify-content: space-between;
img{
    width: 180px; 
    border-radius: 10px; 
    margin: 0 15px; 
}

@media screen and (max-width: 1300px) {
        justify-content: flex-start;
        /* align-content: center; */

    }

`

const FruitInfo = styled.div`
    display: flex; 
    flex-direction: column;
    align-content: space-between;

    

`

const SellerId = () => {
    const { sellerId } = useParams()

    let sellerArray = sellersArray.filter(sellerItem => {
        return sellerItem.id === sellerId;
    })
    let seller = sellerArray[0];
    console.log(seller)

    //items of selected seller
    let itemArray = itemsArray.filter(item => {
        return item.sellerId === seller.id;
    })

    console.log(itemArray);
    return (
        <div>
            <h1> {seller.storeName}</h1>
            <Wrapper>
                {itemArray.map(fruit => {
                    return (
                        <FruitContainer key={fruit.id}>
                            <img src={fruit.imageSrc} />
                            <FruitInfo>
                                <h3>{fruit.name}</h3>
                                <p>{fruit.latinName}</p>
                                <p>Country of Origin: <span>Spain</span></p>
                            </FruitInfo>
                        </FruitContainer>

                    )
                })}
            </Wrapper>
        </div>
    )

}

export default SellerId;