import React from "react";
import Slider from "react-slick";
import { sliderImages, imageSliderConfig } from "../../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import styled from "styled-components";
const imageSlider = () => {
  return (
    <article>
      <Art {...imageSliderConfig}>
        {sliderImages.map((image) => (
          <CTA key={image.id}>
            <SliderText src={image.textImage} />
            <div class="slider__imgContainer">
              <img className="slider__img" src={image.url} />
            </div>
          </CTA>
        ))}
      </Art>
    </article>
  );
};

const Art = styled(Slider)`
    .slick-track{
      overflow: unset;
    }
    .slick-list{
      overflow: unset;
      margin: 0 -10px;
    }
    .slick-dots li button::before {
      color: rgb(150, 158, 171);
      left: 0px;
      top: 0px;
      opacity: 1;
      content: "•";
      width: 20px;
      height: 20px;
      font-size: 12px;
      line-height: 20px;
      position: absolute;
      text-align: center;
      -webkit-font-smoothing: antialiased;
    }
    .slick-dots li.slick-active button::before {
      color: rgb(249, 249, 249);
    }
` ;
const CTA = styled.div`
  padding: 5px;
  position: relative;
  outline: none !important;
`;
const SliderText = styled.img`
position: absolute;
top: 0;
left: 0;
z-index: 1;
width: 100%;
height: 100%;
opacity: 0;
transform: translateX(15px);
transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;
`;

export default imageSlider;