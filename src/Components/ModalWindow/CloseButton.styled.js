import styled from "styled-components";

export const CloseButton = styled.button(() => {
    return ({
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '20px',
        height: '20px',
        border: 'none',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        fill: 'white',
        '&:hover': {
            backgroundColor: 'blue',
        }
    })
})