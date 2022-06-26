import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface CardBadgeProps {
  condition: string;
}

export const CardBadge: FC<CardBadgeProps> = ({ condition }) => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        height={34}
        width={40}
        sx={{
          display: "flex",
          alignItems: "flex-end",
          backgroundColor:
            condition === "nuovo" ? "warning.main" : "secondary.light",
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 65%)",
        }}
      />
      <Typography
        variant="subtitle2"
        position="absolute"
        fontWeight="700"
        fontStyle="italic"
        textTransform="uppercase"
        sx={{
          zIndex: 1,
          top: 22,
          right: 8,
        }}
      >
        {t(condition)}
      </Typography>
    </>
  );
};
