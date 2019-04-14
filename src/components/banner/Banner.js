import React from 'react'
import styled from '@emotion/styled'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Banner = () => (
    <Container>
        <LeftContent />
        <RightContent />
    </Container>
)

export default Banner

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 25px;

`