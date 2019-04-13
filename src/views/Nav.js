import React from 'react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import NavBar from '../components/NavBar'


const Nav = () => (
    <Container>
        <Header />
        <NavBar />
    </Container>
)

export default Nav

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`