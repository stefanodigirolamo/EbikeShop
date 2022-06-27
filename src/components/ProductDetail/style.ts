import { styled } from '@mui/material/styles';
import { Paper, Typography } from "@mui/material";

export const ProductDetailContainer = styled(Paper)(({ theme }) => ({
  padding: "0 2vw",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  borderRadius: 0,
  [theme.breakpoints.down("md")]: {
    height: "30rem"
  },
}));

export const ProductDetailTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 24,
  },
}));

export const ProductDetailDescription = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 12,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 16,
  },
}));
