import StarIcon from "@mui/icons-material/Star";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useRatingValue } from "./hooks";
import { RatingContainer } from "./style";

interface RatingProps {
  value: number;
}

export const Rating: FC<RatingProps> = ({ value }) => {
  const { ratingValue } = useRatingValue(value);
  const ratingNumber = value.toLocaleString();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <RatingContainer
        name="text-feedback"
        value={ratingValue}
        readOnly
        precision={1}
        size="small"
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.5, color: "secondary" }}
            fontSize="inherit"
          />
        }
      />
      <Typography sx={{ ml: 1 }} variant="subtitle2" fontWeight={700}>
        {ratingNumber}
      </Typography>
    </Box>
  );
};
