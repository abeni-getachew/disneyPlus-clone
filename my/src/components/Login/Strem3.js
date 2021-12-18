import React from 'react'
import styled from 'styled-components'
import img from './images/Soul_Groupwatch.jpg';
const Strem3 = () => {
    return (
        <>
            <Section>
                <Container>
                    <Content>
                        <h1>Virstual Movie Nights with</h1>
                        <h1>Group Watch</h1>
                        <li>Watch togather, even when apart</li>
                        <li>Strem width up to 6 frinds</li>
                        <li>Pause, rewind, react togather</li>
                        <li>Easy setup and Sharing</li>
                    </Content>
                </Container>
            </Section>
        </>
        
    )
}

const Section = styled.section`
    background: url(${img})center/cover no-repeat;
    height: 71vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 768px) and (max-width: 1200px){
            height: 61vh;
    } 
    @media screen and (min-width: 280px) and (max-width: 767px){
        height: 55vh;
    }
`;
const Container = styled.div`
    width: 91%;
    margin: 0 auto;
    @media screen and (min-width: 280px) and (max-width: 991px){
        width: 85%;
    }
`;
const Content = styled.div`
    margin-top: 17vh;
    @media screen and (min-width: 768px) and (max-width: 1200px){
        margin-top: 13vh;
    }
    li {
        font-size: 1rem;
        font-weight: 300;
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size:0.75rem
        }
    }
`;
export default Strem3
