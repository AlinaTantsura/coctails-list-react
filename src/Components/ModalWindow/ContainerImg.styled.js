import styled from "styled-components";

export const ContainerImg = styled.div(() => {
    return ({
        minWidth: '200px',
        maxWidth: '200px',
        // width: '200px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '5px',
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',

        }
    })
})