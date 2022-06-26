import { Box, Grid } from "@mui/material";
import { ProductCard } from "../../components";
import { useProductsList } from "../../hooks";

export const Hp = () => {
  const { productsList } = useProductsList();

  return (
    <Box sx={{ flexWrap: 1 }} paddingTop={10} paddingBottom={4}>
      <Grid container rowSpacing={6} display="flex" direction="row">
        {productsList.map((productData) => (
          <Grid
            xs={12}
            md={6}
            lg={4}
            display="flex"
            justifyContent="center"
            item
          >
            <ProductCard product={productData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
