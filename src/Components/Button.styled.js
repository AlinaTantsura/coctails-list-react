import styled from "styled-components";

export const Button = styled.button(() => {
    return ({
        padding: '8px',
        backgroundColor: 'grey',
        border: 'none',
        borderRadius: '5px',
        fontWeight: '500',
        '&:hover': {
            backgroundColor: 'blue',
            color: 'white',
        }
    })
})