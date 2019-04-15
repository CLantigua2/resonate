import React from 'react'
import styled from '@emotion/styled'

const Footer = () => (
    <Container>
        <footer>
            <h4>Footer stuff goes here</h4>
        </footer>
    </Container>
)

export default Footer

const Container = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    width: 100%;
    background: ${({theme}) => theme.color.secondary};
    margin-top: -100px;
`