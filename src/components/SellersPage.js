import React from 'react';
import styled from 'styled-components'
import { sellers } from '../data';
import { Link } from "react-router-dom"

let sellersArray = Object.values(sellers)



const SellersCont = styled.div`
    display: flex; 
    justify-content: center;

    @media only screen and (max-width: 962px){
        flex-direction: column;
        align-content: left;
    }
`

const SellerCont = styled.div`
    display: flex;
    margin: 50px 50px; 
    justify-content: flex-start;

`

const SellerImg = styled.img`
    width: 200px; 
    border-radius: 15px; 
    margin-right: 20px; 

`

const SellerContent = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    h2 {
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0; 
        color: grey; 
        font-style: italic;
    }
    
`

const Styledlink = styled(Link)`
    text-decoration: none;
    color: black;
    margin-bottom: 20px; 
    border-radius: 10px; 
    background-color: #7FBFE5; 
    width: 170px; 
    color: white;
    text-align: center;
    padding: 10px 15px; 
`

const SellersPage = () => {
    return (
        <SellersCont>
            {sellersArray.map(seller => {
                return (
                    <SellerCont key={seller.id}>
                        <SellerImg src={seller.avatarSrc} alt="" srcset="" />
                        <SellerContent>
                            <div>
                                <h2>{seller.storeName}</h2>
                                <p>{seller.description}</p>
                            </div>
                            <Styledlink to={`/sellers/${seller.id}`}>
                                View Products</Styledlink>
                        </SellerContent>
                    </SellerCont>

                )
            })}
        </SellersCont >
    )
}


export default SellersPage;


