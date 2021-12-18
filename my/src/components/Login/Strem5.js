import React from 'react';
import styled from 'styled-components';
import {img1, img2, img3,img4, img5, img6,img7,img8} from './images'

const Strem5 = () => {
    return (
        <>
            <Section>
                <Container>
                    <Title>
                        <h1 className='disney-titles'>Stream Exclusive Disney+ Originals</h1>
                        <p>New Stories from our incredible family of studios</p>
                    </Title>
                    <GridImg>
                        <Image><img  src={img1} alt="grid/img" /></Image>
                        <Image><img  src={img2} alt="grid/img" /></Image>
                        <Image><img  src={img3} alt="grid/img" /></Image>
                        <Image><img  src={img4} alt="grid/img" /></Image>
                        <Image><img  src={img5} alt="grid/img" /></Image>
                        <Image><img  src={img6} alt="grid/img" /></Image>
                        <Image><img  src={img7} alt="grid/img" /></Image>
                        <Image><img  src={img8} alt="grid/img" /></Image>
                    </GridImg>
                    <GetBundleBtn><button type='button' className='btn-theme-disney'>Get the Disney Bandles</button></GetBundleBtn>
                </Container>
            </Section>
        </>
    )
};

const Section = styled.section`
    padding: 5vh 0;
    position: relative;
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const Title = styled.div`
    text-align: center;
    margin-bottom: 3vh;
    p{
        font-size: 1rem;
        @media screen and (max-width: 550px) {
            font-size: .8rem;
        }
    }
`;
const GridImg = styled.div`
    display: grid;
    gap: 15px 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr))

`;
const Image = styled.div`
    width: 100%;
    padding: 0;
    border-radius: 0.24rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -0px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.245rem;
    }            
`;
const GetBundleBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1vh 0;
`

export default Strem5
