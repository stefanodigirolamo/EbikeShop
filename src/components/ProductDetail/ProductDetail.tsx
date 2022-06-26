import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Product } from "../../utils";
import { Chip } from "../Chip";
import { Rating } from "../Rating";
import {
  ProductDetailContainer,
  ProductDetailDescription,
  ProductDetailTitle
} from "./style";

interface ProductDetailProps {
  productData: Product;
}

export const ProductDetail: FC<ProductDetailProps> = ({
  productData,
}) => {
  const { t } = useTranslation();

  return (
    <ProductDetailContainer elevation={2}>
      <ProductDetailTitle fontWeight={700} textTransform="uppercase">
        {t(productData.title)} - {t(productData.subtitle)}
      </ProductDetailTitle>
      <ProductDetailDescription fontWeight={400} fontStyle="italic">
        {t(productData.description)}
      </ProductDetailDescription>
      <Rating value={productData.rating} />
      <Chip
        title={t("e-bike")}
        value={t(productData.type)}
        titleColor="text.secondary"
        color="secondary"
      />
      <Chip
        title={t("condizioni")}
        value={t(productData.condition)}
        titleColor="text.secondary"
        valueColor="secondary"
      />
      <Chip
        title={t("colore")}
        value="+4"
        titleColor="text.secondary"
        valueColor="secondary"
      />
      <FormControl>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textTransform="uppercase"
        >
          {t("taglia")}
        </Typography>
        <RadioGroup row>
          {productData.sizes.map((size: string) => (
            <FormControlLabel
              value={size}
              control={<Radio />}
              label={
                <Typography variant="subtitle2" fontWeight={700}>
                  {size}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Typography variant="h1" fontWeight={700} paddingRight={1}>
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
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 0,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
        endIcon={<ShoppingCartIcon />}
      >
        {t("aggiungi al carrello")}
      </Button>
    </ProductDetailContainer>
  );
};
