import React from 'react'
import styled from '@emotion/styled'


const Wrapper = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Wrapper

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`