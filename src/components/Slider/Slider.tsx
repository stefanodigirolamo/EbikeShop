import { Box } from "@mui/material";
import { FC } from "react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Image } from "../../utils";
import { SliderContainer } from "./styles";

interface SLiderProps {
  images: Image[];
}

export const Slider: FC<SLiderProps> = ({ images }) => {
  return (
    <SliderContainer
      pagination={{
        type: "progressbar",
      }}
      navigation
      modules={[Pagination, Navigation]}
    >
      {images.map((item) => (
        <SwiperSlide>
          <Box
            key={item.id}
            alt="not found"
            src={item.source}
            component="img"
            sx={{
              display: "block",
              overflow: "hidden",
              width: "100%",
            }}
          />
        </SwiperSlide>
      ))}
    </SliderContainer>
  );
};
