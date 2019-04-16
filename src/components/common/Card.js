import React from 'react'
import styled from '@emotion/styled'

const Card = ({children}) => (
    <Container>
        {children}
    </Container>
)

export default Card

const Container = styled.div`
    padding: 10px;
    box-shadow: ${({theme}) => theme.shadows.three};
    width: 100%;
    height: 100%;
     @media ${({theme}) => theme.media.mobile} {
            flex-direction: column;
        }

`