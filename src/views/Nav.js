import React from 'react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NavBarScroll from '../components/NavBarScroll'


const Nav = () => (
    <Container>
        <Header />
        <NavBarScroll />
        <NavBar />
    </Container >
)

export default Nav

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    @media ${({ theme }) => theme.media.tablet} {
            max-width: 768px;
        }
    @media ${({ theme }) => theme.media.mobile} {
            max-width: 320px;
        }
    @media ${({ theme }) => theme.media.laptop} {
            max-width: 1024px;
        }
`