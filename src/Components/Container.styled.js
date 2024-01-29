import styled from "styled-components";

export const Container = styled.div(() => {
    return ({
        minHeight: '100vh',
        maxWidth: '1200px',
        backgroundColor: 'transparent',
        position: 'relative',
        top: 0,
        textAlign: 'center',
        paddingBottom: '20px',
    })
})