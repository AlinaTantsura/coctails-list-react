import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Navigation = styled.nav(() => {
    return ({
        margin: '0 15px',
        display: 'flex',
        gap: '10px',

    })
});

export const LinkNav = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 500;

    &.active {
        color: orangered;
    }  
    `;