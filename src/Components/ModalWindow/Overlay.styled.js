import styled from "styled-components"

export const Overlay= styled.div(() => {
    return ({
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: '1000',
    })
})