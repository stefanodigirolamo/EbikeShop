import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FC } from "react";
import { CardBadge } from "../CardBadge";

interface CardHeaderProps {
  productCondition: string;
}

export const CardHeader: FC<CardHeaderProps> = ({ productCondition }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX={1}
      paddingBottom={1}
      position="relative"
    >
      <IconButton aria-label="settings">
        <FavoriteIcon fontSize="small" />
      </IconButton>
      <CardBadge condition={productCondition} />
    </Box>
  );
};
