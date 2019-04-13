import React from 'react'
import styled from '@emotion/styled'
import RightContent from './RightContent'

const Banner = () => (
    <Container>
        <RightContent />


    </Container>
)

export default Banner

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`