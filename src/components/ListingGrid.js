import React from "react";
import styled from 'styled-components';
import ListingItem from "./ListingItem"
import { Link } from "react-router-dom"


const FruitLink = styled(Link)`
    color: inherit;
`

const ListingGrid = (props) => {
    return (
        <Wrapper>
            {props.itemData.map(item => (
                <FruitLink key={item.id} to={`/items/${item.id}`}>
                    <ListingItem item={item} />
                </FruitLink>

            ))}
        </Wrapper>
    );
};


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 32px;
    margin: 32px 0;
`;

export default ListingGrid;