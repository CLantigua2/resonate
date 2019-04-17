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
    margin: 20px auto 0 auto;

    .inside {
        padding-bottom: 100px;
    }
     @media ${({ theme }) => theme.media.tablet} {
            max-width: 768px;
        }
    @media ${({ theme }) => theme.media.mobile} {
            max-width: 320px;
            padding-bottom: 0;
        }
    @media ${({ theme }) => theme.media.laptop} {
            max-width: 1024px;
        }

`