
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../../firebase";
import "./Detail.css";
import imgs from "../../images/x.jpg";
import YouTubePlayer from "react-player/youtube";

import ReactPlayer from "react-player/lazy";
const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);
  const opts = {
    height: "790",
    width:"100%",
};
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer  onClick={() => setShowPlayer(true)}>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
      {showPlayer && (
        <Show></Show>
      )}
      <Shows className={showPlayer ? "ab" : "ba"}>
        <Mains>
            
            <Curser onClick={() => setShowPlayer(false)}>
              <img src={imgs} alt="x"/>
            </Curser>
        </Mains>
        {showPlayer && <YouTubePlayer 
            url={`https://www.youtube.com/watch?v=${detailData.vi}`}
            opts={opts}
            controls={true}
            width="100"
          
        
        />
        }
      </Shows>
    </Container>
  );
};
const Po = styled.div`
  width: 100vh;
  position: relative;
  padding-top: 12rem;
  padding-left: 2rem;
  object-fit: contain;
  
`;
const Curser = styled.div`
    cursor: pointer;
    width: 2rem;
    hight: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    opacity: 0.5;
    :hover{
      opacity: 0.7;
      background-color: #0F0F0F;
    }
    img{
      width: 100%;
      height: 1.85rem;
      background-color: #fff;
      border-radius: 3px;
    }
`;
const Semi = styled.span`
  font-weight: 600;
`;


const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const Mains = styled.div`
  display: flex;
  align-item: center;
  background-color: black;
  text-color: #f9f9f9;
  padding: 0.875rem;
  span{
    font-weight: 600;
    color: red;
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;


const Trailer = styled.button`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-right: 1rem;
  span {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.025em;
    padding-top: .5rem;
  }
  img{
    color: black;
    padding-top: .5rem;
  }
  @media (min-width: 768px) { 
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: rgb(156 163 175);
    text-color: #f9f9f9;
    border: 2px solid #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: centerl
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    :hover{
      background-color: #c6c6c6;
    }
  }

`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Show = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: black;
  opacity: .5;
  height: 100%;
  width: 100%;
  z-index: 50;
`;
const Shows = styled.div`

  position: absolute;
  top: 0.75rem;
  left: 1.75rem;
  right: 1.75rem;
  border-radius: 0.25rem;
  overflow: hidden;

  transition-duration: 1000ms;
`;


export default Detail;