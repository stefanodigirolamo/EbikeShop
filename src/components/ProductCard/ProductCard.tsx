import CardContainer from "@mui/material/Card";
import { FC } from "react";
import { Product } from "../../utils";
import { Slider } from "../Slider";
import { CardActions } from "./CardActions";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer
      elevation={4}
      sx={{
        height: "fit-content",
        maxWidth: 343,
        borderRadius: 0,
      }}
    >
      <CardHeader productCondition={product.condition} />
      <Slider images={product.images} />
      <CardContent productData={product} />
      <CardActions productTitle={product.subtitle} />
    </CardContainer>
  );
};
