import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface CardBadgeProps {
  condition: string;
}

export const CardBadge: FC<CardBadgeProps> = ({ condition }) => {
  const { t } = useTranslation();

  const badgeColor = condition === "nuovo" ? "#ABAECC" : "#FFB000";

  return (
    <Box
      height={34}
      width={37}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: `linear-gradient(200.13deg, ${badgeColor} 72.01%, rgba(255, 198, 38, 0) 72.37%)`,
      }}
    >
      <Typography
        variant="subtitle2"
        fontSize={10}
        fontWeight="700"
        fontStyle="italic"
        textTransform="uppercase"
      >
        {t(condition)}
      </Typography>
    </Box>
  );
};
