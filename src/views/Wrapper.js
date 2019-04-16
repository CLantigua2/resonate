import React from 'react'
import styled from '@emotion/styled'


const Wrapper = ({ children }) => (
    <Container>
        <section className="inside">
        {children}
        </section>
    </Container>
)

export default Wrapper

const Container = styled.div`
    min-height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    .inside {
        padding-bottom: 200px;
    }
`