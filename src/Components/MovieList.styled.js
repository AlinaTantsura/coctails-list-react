import styled from "styled-components";

export const MoviesListStyled = styled.ul(() => {
    return ({
        listStyle: 'none',
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        li: {
            paddingBottom: '8px',
            position: 'relative',
            objectFit: 'cover',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            width: '150px',
            border: 'solid 1px lightgrey',
            borderRadius: '6px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            
            div: {
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                 img: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: "transform 1000ms easy-out",
                },
            },
        },
        'li:hover': {
            color: 'blue',
            fontWeight: '700',
            img: {
                transform: 'scale(1.1)'
            },
        }
        
    })
});