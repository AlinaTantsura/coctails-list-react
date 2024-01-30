import styled from "styled-components"

export const DivActions = styled.div(() => {
    return ({
        width: '100%',
        // padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        button: {
            width: '100%',
        },
        'a:hover': {
            color: 'blue',
        }
    })
})