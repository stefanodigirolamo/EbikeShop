import { styled } from "@mui/material/styles";
import { Rating as RatingComponent } from "@mui/material";

export const RatingContainer = styled(RatingComponent)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: theme.palette.secondary.main,
  },
}));
