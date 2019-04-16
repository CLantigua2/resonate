import React from 'react'
import Banner from '../components/banner/Banner'
import Featured from '../components/featured/Featured'
import Blog from '../components/featured/Blog'
import styled from '@emotion/styled'


const HomePage = () => (
    <Container>
        <Banner />
        <Featured />
        <Blog />
        <Form>
        </Form>
    </Container>
)

export default HomePage

const Container = styled.div`
    @media ${({ theme }) => theme.media.tablet} {
            max-width: 768px;
        }
    @media ${({ theme }) => theme.media.mobile} {
            max-width: 320px;
        }
    @media ${({ theme }) => theme.media.laptop} {
            max-width: 1024px;
        }
`

const Form = styled.form`
    width: 100%;
    height: 100%;
`