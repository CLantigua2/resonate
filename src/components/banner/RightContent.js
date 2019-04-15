import React, { Suspense } from 'react'
import styled from '@emotion/styled'
import buddhastatue from '../../image/buddhastatue.jpg'

const RightContent = () => (
    <Container>
        <Suspense fallback={<p>Loading...</p>}>
            <div className="background" >
            </div>
        </Suspense>
    </Container >
)

export default RightContent

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    .background {
        background-image: url(${buddhastatue});
        min-height: 100%;
        min-width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;
.text-one {
        position: inline;
        right: 2%;
        align-self: center;
        margin-top: 358px;
        margin-left: 355px;
        max-width: 60%;
        z-index: 2;
        border-radius: 10px;
        color: ${({ theme }) => theme.color.dark};
        font-style: italic;
        background: white;
        box-shadow: ${({ theme }) => theme.shadows.one};
        padding: 20px 20px;
        text-align: center;
        /* width: 500px; */
    }
}`