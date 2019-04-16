import React, {Suspense} from 'react'
import styled from '@emotion/styled'
import Carousel from 'nuka-carousel';
import PurpleCluster from '../../image/featuredproducts/PurpleCluster.jpg'
import RainbowOrgone from '../../image/featuredproducts/RainbowOrgone.jpg'
import RainbowSphere from '../../image/featuredproducts/RainbowSphere.jpg'

const list = [PurpleCluster, RainbowSphere, RainbowOrgone ]

const Featured = () => (
    <Container>
    <div className="header">
        <h5>Featured Products</h5>
        <p>On Sale NOW!!!</p>
        </div>
    <Carousel withoutControls={true}
    wrapAround={true}
    pauseOnHover={true}
    autoplay={true}
    animation="zoom"
    cellAlign="center"
    >
        {list.map((item, i) => {
        return (
             <Suspense key={item.id} fallback={<div>Loading...</div>}>
                <img key={i} src={item} alt={`featured product ${i}`} />
        </Suspense>
        )}
    )}
    </Carousel>
    </Container>

)

export default Featured

const Container = styled.div`
    width: 90%;
    padding: 20px;
    margin: 0 auto;
    margin-top: 100px;
    .header {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-bottom: 50px;
        h5 {
            margin-bottom: 30px;
            text-transform: uppercase;
        }
    }
`