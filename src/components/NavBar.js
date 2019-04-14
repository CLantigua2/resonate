import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import logo from '../image/logo.png'

const NavBar = () => (
    <Container>
        <Child left>
            <Link to="/"><img src={logo} alt="resonate logo" className="logo" /></Link>
        </Child>
        <Child midRight>
            <button className="navLinks">FEATURES</button>
            <button className="navLinks">PRODUCTS</button>
            <button className="navLinks">PAGES</button>
            <button className="navLinks">SHOP</button>
        </Child>

    </Container>
)

export default NavBar

const Container = styled.div`
    padding: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

const Child = styled.div`
    justify-content: space-between;
    width: 50%;
    margin: 0 4%;
    .navLinks {
        background: none;
        transform: skewY(-20deg) rotate(20deg);
        border-top: none;
        border-left: none;
        margin: 0;
        padding: 10px;
        transition: 0.3s ease-in-out;
        :hover {
            color: ${({theme}) => theme.color.danger};
            border-color: red;
        }
    }
    .logo {
        width: 150px;
    }

`