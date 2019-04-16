import React from 'react'
import styled from '@emotion/styled'

const ImgCard = ({id, image, alt, title, content}) => (
    <Container id={id}>
        <h6>{title}</h6>
        <img className="image" src={image} alt={alt} />
        <div>
        <p>{content}</p>
        </div>
    </Container>
)

export default ImgCard

const Container = styled.div`
    padding: 20px;
    width: 450px;
    max-height: 100%;
    box-shadow: ${({theme}) => theme.shadows.three};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin: 25px;
    overflow: hidden;
    white-space: wrap;
    h6 {
        margin-bottom: 20px;
    }
    .image {
        width: 380px;
        margin-bottom: 20px;
    }
    p {
        overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    }
    @media ${({theme}) => theme.media.tablet} {
            max-width: 768px;
        }
    @media ${({theme}) => theme.media.mobile} {
        max-width: 320px;
        padding: 0;
        margin-bottom: 10px;
    }
    @media ${({theme}) => theme.media.laptop} {
            max-width: 1024px;
        }

`