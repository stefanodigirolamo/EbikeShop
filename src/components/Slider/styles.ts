import { styled } from '@mui/material/styles';
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SliderContainer = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-progressbar {
    bottom: 0% !important;
    top: unset !important;
  }
  .swiper-pagination-progressbar-fill {
    background-color: #a1a1a1 !important;
  }
  .swiper-pagination-progressbar {
    background-color: #f0f0f0;
  }
  .swiper-button-prev {
    color: #131313;
    left: 35%;
    right: auto;
    top: unset;
    bottom: 2%;
  }
  .swiper-button-next {
    color: #131313;
    left: auto;
    right: 35%;
    top: unset;
    bottom: 2%;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 18px;
    font-weight: bold;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: none;
    background: none;
  }
`;
