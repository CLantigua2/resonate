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
.text-one {
        align-self: center;
        z-index: 2;
        border-radius: 10px;
        color: #ffffff;
        font-style: italic;
        background: #77C68B;
        padding: 20px 20px;
        width: 100%;
        text-align: center;
        margin: 0;
    }
    img {
        width: 50%;
        height: 700px;
        transform: translateX(550px);
        filter: contrast(110%);
        align-self: center;
    }`