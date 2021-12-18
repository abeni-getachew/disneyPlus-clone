import React from 'react';
import styled from 'styled-components';
import {ab, ab1, ab2, ab3} from './images'

const Strem6 = () => {
    return (
        <>
            <Section>
                <Container>
                    <Title>
                        <h1 className='disney-titles'>Stream Exclusive Disney+ Originals</h1>
                        <p>New Stories from our incredible family of studios</p>
                    </Title>
                    <GridImg>
                        <Image><img  src={ab} alt="grid/img" /> <h2>XBOX</h2></Image>
                
                        <Image><img  src={ab1} alt="grid/img" /><h2>Laptop</h2></Image>
                        <Image><img  src={ab2} alt="grid/img" /><h2>mobile</h2></Image>
                        <Image><img  src={ab3} alt="grid/img" /><h2>TV</h2></Image>
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
    grid-template-columns: repeat(4, minmax(0, 1fr))
    
    

`;
const Image = styled.div`
    width: 50%;
    height: 100px;
    padding: 0;
    border-radius: 0.24rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -0px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 50%;
        height: 60%;
        object-fit: contain;
        border-radius: 0.245rem;
    }
    h2{
        margin-left: 2rem;
        margin-top: .5rem;
        object-fit: contain;
    }            
`;
const GetBundleBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1vh 0;
`

export default Strem6