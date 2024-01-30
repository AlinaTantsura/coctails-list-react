import styled from "styled-components";

export const FavoriteList = styled.ul(() => {
    return ({
        listStyle: 'none',
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '15px',
        li: {
            padding: '8px',
            position: 'relative',
            objectFit: 'cover',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            minWidth: '300px',
            border: 'solid 1px lightgrey',
            borderRadius: '6px',
            overflow: 'hidden',
            display: 'flex',
            gap: '8px',
            // alignItems: 'center',
            
          
        } 
    })
});