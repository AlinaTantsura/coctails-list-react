import styled from "styled-components";

export const FormStyled = styled.form(() => {
    return ({
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        input: {
            padding: '5px',
            outline: 'none',
            border: 'solid 1px grey',
            borderRadius: '4px',
            '&:focus': {
                border: 'solid 2px blue'
            }
        }
        
    })
})