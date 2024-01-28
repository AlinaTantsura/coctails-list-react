import styled from "styled-components"

export const Modal = styled.div(() => {
    return ({
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        zIndex: '1000',
        padding: '15px',
        display: 'flex',
        gap: '15px',
        minWidth: '300px',
    })
})