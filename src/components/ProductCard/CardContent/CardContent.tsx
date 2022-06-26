import {
  Box, CardContent as CardContentContainer, Typography
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Product } from "../../../utils";
import { Chip } from "../../Chip";
import { Rating } from "../../Rating";

interface CardHeaderProps {
  productData: Product;
}

export const CardContent: FC<CardHeaderProps> = ({ productData }) => {
  const { t } = useTranslation();

  return (
    <CardContentContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle2" fontWeight={700}>
          {t(productData.title)}
        </Typography>
        <Rating value={productData.rating} />
      </Box>
      <Typography variant="h1" fontWeight={700} fontStyle="italic" textTransform="uppercase">
        {t(productData.subtitle)}
      </Typography>
      <Typography variant="subtitle2" fontWeight={400} fontStyle="italic">
        {t(productData.description)}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-around"
        flexDirection="column"
        minHeight={150}
      >
        <Chip
          title={t("e-bike")}
          value={t(productData.type)}
          titleColor="text.secondary"
          color="secondary"
        />
        <Chip
          title={t("colore")}
          value="+4"
          titleColor="text.secondary"
          valueColor="secondary"
        />
        <Chip
          title={t("taglia")}
          value="S M L XL"
          titleColor="text.secondary"
          valueColor="secondary"
        />
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typography variant="h2" fontWeight={700} paddingRight={1}>
            €3.299,00
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ textDecoration: "line-through" }}
            lineHeight={0}
          >
            €3.299,00
          </Typography>
        </Box>
      </Box>
    </CardContentContainer>
  );
};
