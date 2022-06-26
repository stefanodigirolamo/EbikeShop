import { Box, Grid } from "@mui/material";
import { ProductDetail, Slider } from "../../components";
import { useProduct } from "../../hooks";

export const Pdp = () => {
  const { product } = useProduct();

  return (
    <Box minHeight="100vh" display="flex" alignItems="center">
      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="space-around"
        paddingTop={6}
      >
        <Grid
          xs={12}
          md={7}
          lg={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
        >
          <Slider images={product.images} />
        </Grid>
        <Grid
          xs={12}
          md={4}
          lg={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
        >
          <ProductDetail productData={product} />
        </Grid>
      </Grid>
    </Box>
  );
};
