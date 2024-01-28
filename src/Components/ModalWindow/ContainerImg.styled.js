import styled from "styled-components";

export const ContainerImg = styled.div(() => {
    return ({
        minWidth: '150px',
        height: '250px',
        overflow: 'hidden',
        borderRadius: '5px',
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',

        }
    })
})