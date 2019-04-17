import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import useScrollPosition from './useScrollPosition'
import Fade from 'react-reveal/Fade'

const NavBarScroll = () => {
    const useScroll = useScrollPosition()
    if (useScroll > 130) {
        return (
            <StickyContainer>
                <Fade>
                        <div className="sticky">
                            <NavLink to="/">Features</NavLink>
                            <NavLink to="/">Products</NavLink>
                            <NavLink to="/">Pages</NavLink>
                            <NavLink to="/">Shop</NavLink>
                        </div>
                </Fade>
            </StickyContainer >
        )
    } else {
        return null
    }
}

export default NavBarScroll

const StickyContainer = styled.div`
    position: fixed;
    top: 0;
    z-index: 200;
    width: 1440px;
    background: #ffffff;
    height: 55px;
    margin-bottom: 55px;
    .sticky {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 15px 0;

    }

`

