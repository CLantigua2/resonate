import React from 'react'
import styled from '@emotion/styled'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const LeftContainer = () => (
    <Container>
        <div className="card">
            <h5>Sign up for Free</h5>
            <p>Never miss a deal</p>
        </div>
        <div className="signup">
            <Link to="/signup"><Button primary={true}>Sign up</Button></Link>
        </div>
    </Container>
)

export default LeftContainer

const Container = styled.div`
    width: 35%;
    margin-top: 64px;
    color: ${(({ theme }) => theme.color.dark)};
    height: 100%;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 5em;
    transform: translateX(150px);
    .signup {
        padding: 5px;
    }
`