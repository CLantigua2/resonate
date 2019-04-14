import React, { Suspense } from 'react'
import styled from '@emotion/styled'
import buddhastatue from '../../image/buddhastatue.jpg'
import Fade from 'react-reveal/Fade'

const RightContent = () => (
    <Container>

    <Suspense fallback={<p>Loading...</p>}>
            <img src={buddhastatue} alt="Statue of buddha" />
        </Suspense>
        <Fade right>
        <div className="text-one">
            <h4>Begin your spiritual journey</h4>
        </div>
        </Fade>
    </Container>
)

export default RightContent

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
.text-one {
        position: inline;
        right: 2%;
        align-self: center;
        z-index: 2;
        border-radius: 10px;
        color: ${({theme}) => theme.color.dark};
        font-style: italic;
        background: white;
    box-shadow: ${({theme}) => theme.shadows.one};
        padding: 20px 20px;
        text-align: center;
        width: 500px;
    }
    img {
        max-width: 550px;
        transform: translateX(100px);
        filter: contrast(110%);
        align-self: center;
    }`