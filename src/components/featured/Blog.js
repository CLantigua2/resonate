import React from 'react'
import styled from '@emotion/styled'
import ImgCard from '../common/ImgCard'
import Herb1 from '../../image/herbs/herbs1.jpg'
import Herb2 from '../../image/herbs/herbs2.jpg'
import Herb3 from '../../image/herbs/herbs3.jpg'

const images = [
     {
        id: 1,
        img: Herb1,
        title: "Grow indoor herbs",
        content: "Bacon ipsum dolor amet shank rump sirloin fatback ham salami. Ground round flank alcatra tongue jowl rump kielbasa ribeye chuck short loin meatball. Sausage frankfurter chuck flank pork belly. Rump ham hock meatball beef ribs."
    },
    {
        id: 2,
        img: Herb2,
        title: "Raise Ginger on your Window",
        content: "Shankle shank prosciutto salami, meatloaf filet mignon bacon jowl ham hock andouille flank. Bacon brisket pig meatloaf leberkas spare ribs pork chop ground round prosciutto t-bone landjaeger tongue shank porchetta. Ribeye alcatra pork meatloaf turducken buffalo ham hock pancetta burgdoggen rump sirloin bacon corned beef venison."
    },
    {
        id: 3,
        img: Herb3,
        title: "Best herbs for spring time",
        content: "Spicy jalapeno bacon ipsum dolor amet do nisi landjaeger cillum shank jowl non. Turkey porchetta lorem prosciutto dolore kielbasa fugiat. Voluptate biltong ut, ribeye dolor laboris minim ullamco short loin tri-tip brisket jerky spare ribs beef burgdoggen. Meatloaf short loin cillum corned beef excepteur commodo kevin sirloin ut tongue flank. Eiusmod filet mignon doner ipsum."
    }
]

const Blog = () => {
    const content = images.map(item => {
        return (
            <ImgCard key={item.id} id={item.id} title={item.title} image={item.img} alt={item.title} content={item.content}>
            </ImgCard>
        )
    })
    return (
        <Container>
            {content}
        </Container>
            )
    }


export default Blog

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    /* flex-wrap: wrap; */
    /* width: 100%; */

`