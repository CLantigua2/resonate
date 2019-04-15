import React from 'react'
import styled from '@emotion/styled'
import Carousel from 'nuka-carousel';
import PurpleCluster from '../../image/featuredproducts/PurpleCluster.jpg'
import RainbowOrgone from '../../image/featuredproducts/RainbowOrgone.jpg'
import RainbowSphere from '../../image/featuredproducts/RainbowSphere.jpg'

const list = [PurpleCluster, RainbowSphere, RainbowOrgone ]

const Featured = () => (
    <Container>
    <Carousel withoutControls={true}
    wrapAround={true}
    pauseOnHover={true}
    autoplay={true}
    animation="zoom"
    cellAlign="center"
    >
        {list.map((item, i) => <img key={i} src={item} alt={`featured product ${i}`} />)}
    </Carousel>
    </Container>

)

export default Featured

const Container = styled.div`
    width: 90%;
    padding: 20px;
    margin: 0 auto;
    margin-top: 100px;
`