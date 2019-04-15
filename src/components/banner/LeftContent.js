import React from 'react'
import styled from '@emotion/styled'
import Button from '../common/Button'

const LeftContainer = () => (
    <Container>
        <div className="card">
            <h4>Sign up for Free</h4>
            <p>Never miss a deal</p>
        </div>
        <div className="signup">
            <Button primary={true}>Sign up</Button>
        </div>
    </Container>



)

export default LeftContainer

const Container = styled.div`
    width: 35%;
    margin-top: 100px;
    color: ${(({ theme }) => theme.color.dark)};
    background: white;
    height: 100%;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 5em;
    box-shadow: ${({ theme }) => theme.shadows.one};
    z-index: 2;
    /* transform: translateX(250px); */
    .signup {
        padding: 5px;
    }
`