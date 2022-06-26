import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { firstProduct, Product, secondProduct } from "../utils";

export const useProduct = () => {
  const { id } = useParams();

  const product: Product = useMemo(() => {
    if (id === "adventure-neo-1-eq") {
      return firstProduct;
    }
    return secondProduct;
  }, [id]);

  return { product };
};
