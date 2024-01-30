import styled from "styled-components";

export const ContainerImg = styled.div(() => {
    return ({
        minWidth: '200px',
        maxWidth: '200px',
        height: '400px',
        overflow: 'hidden',
        borderRadius: '5px',
        img: {
            width: '100%',
            height: '300px',
            objectFit: 'cover',

        }
    })
})