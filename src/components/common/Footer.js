import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Logo from '../../image/logo.png'

const Footer = () => (
    <Container>
        <footer>
            <div>
        <Link to="/"><img src={Logo} alt="Resonate logo" className="logo" /></Link>
            </div>
            <div>
            <Link to="/">About Us</Link>
            </div>
            <div>
            <Link to="/">Careers</Link>
            </div>
            <div>
            <Link to="/">Blog</Link>
            </div>
            <div>
            <Link to="/">Contact Us</Link>
            </div>
        </footer>
        <p>Copywrite &copy; Resonate</p>
    </Container>
)





export default Footer

const Container = styled.div`
    height: 100px;
    width: 100%;
    background: ${({theme}) => theme.color.secondary};
    margin-top: -100px;
    padding: 25px;
    footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
            .logo {
                margin: 0 0 30px 0;
                width: 100px;
            }
        }
    @media ${({theme}) => theme.media.tablet} {
            max-width: 768px;
        }
    @media ${({theme}) => theme.media.mobile} {
            max-width: 320px;
        }
    @media ${({theme}) => theme.media.laptop} {
            max-width: 1024px;
        }
`