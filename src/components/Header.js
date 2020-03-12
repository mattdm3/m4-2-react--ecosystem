import React from 'react';
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex; 
    justify-content: space-between;
    height: 60px;  
    align-items: center;
    margin: 30px 0; 


   
`

const NavBar = styled.div`
color: black;
`
const activeStyle = {
    color: "#B61D16",
    borderBottom: "3px solid #B61D16"
}


const NavigationLink = styled(NavLink)`
    color: #7FBFE5;
    text-decoration: none;
    margin: 0 10px; 
    font-family: "Montserrat";
    padding-bottom: 5px;
    
    h1 {
        font-family: "Helvetica";
        font-weight: 900;
        color: black;
        margin-top: 30px; 
    }
    
`



const Header = () => {
    return (
        <StyledHeader>
            <NavigationLink exact to="/">
                <h1>Fruit Emporium</h1>
            </NavigationLink>
            <NavBar>
                <NavigationLink exact activeStyle={activeStyle} to="/">
                    Home
                </NavigationLink>
                <NavigationLink activeStyle={activeStyle} to="/about">
                    About
                </NavigationLink>

                <NavigationLink activeStyle={activeStyle} to="/sellers">
                    Sellers
                </NavigationLink>
            </NavBar>
        </StyledHeader >
    )
}

export default Header;