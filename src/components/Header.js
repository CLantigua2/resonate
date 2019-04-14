import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Header = () => (
    <Container>
        <Child left>
            <p>Welcome to Our store</p>
        </Child>
        <Child middle>
            <Link to="/"><p>Resonate.com</p></Link>
        </Child>
        <Child right>
            <Link to="/"><p>Blog</p></Link>
            <Link to="/"><p>Wishlist</p></Link>
            <Link to="/"><p>My Account</p></Link>
        </Child>
    </Container>
)

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 1%;
`

const Child = styled.div`
    display: flex;
    position: sticky;
    flex-direction: row;
    width: 100%;
    padding: 0 3%;
    justify-content: space-between;
    flex: ${(({ left, middle, right }) => left ? 2 : middle ? 2 : right ? 3 : null)};
    color: #999999;
    a {
        p {
            font-size: 1.6rem;
            color: ${({theme}) => theme.color.secondary};
            transition: 0.3s ease-in-out;
            :hover {
                color: ${({theme}) => theme.color.primary};
            }
        }
    }
`