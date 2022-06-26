import { Product } from "../utils";

export const useProductsList = () => {
  const productsList: Product[] = [
    {
      title: "CANNONDALE | 2019",
      subtitle: "Adventure Neo 1 Eq",
      description:
        "Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna.",
      condition: "usato",
      type: "urban",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "red", "white", "green"],
      newPrice: 3.299,
      oldPrice: 3.299,
      rating: 120000,
      images: [
        {
          id: 1,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_large.jpg",
        },
        {
          id: 2,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_gallery01.jpg",
        },
        {
          id: 3,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_gallery02.jpg",
        },
        {
          id: 4,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_gallery03.jpg",
        },
      ],
    },
    {
      title: "CANNONDALE | 2019",
      subtitle: "Adventure Neo 2 Eq",
      description:
        "Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna.",
      condition: "nuovo",
      type: "urban",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "red", "white", "green"],
      newPrice: 3.299,
      oldPrice: 3.299,
      rating: 78500,
      images: [
        {
          id: 1,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_large-2-1536x1151.jpg",
        },
        {
          id: 2,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_gallery01-1-1536x1152.jpg",
        },
        {
          id: 3,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_gallery02-1-1536x1153.jpg",
        },
        {
          id: 4,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_gallery04-1-1536x1152.jpg",
        },
      ],
    },
    {
      title: "CANNONDALE | 2019",
      subtitle: "Adventure Neo 1 Eq",
      description:
        "Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna.",
      condition: "usato",
      type: "urban",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "red", "white", "green"],
      newPrice: 3.299,
      oldPrice: 3.299,
      rating: 120000,
      images: [
        {
          id: 1,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_large.jpg",
        },
        {
          id: 2,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_gallery01.jpg",
        },
        {
          id: 3,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_gallery02.jpg",
        },
        {
          id: 4,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE1L21_gallery03.jpg",
        },
      ],
    },
    {
      title: "CANNONDALE | 2019",
      subtitle: "Adventure Neo 2 Eq",
      description:
        "Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna.",
      condition: "nuovo",
      type: "urban",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "red", "white", "green"],
      newPrice: 3.299,
      oldPrice: 3.299,
      rating: 78500,
      images: [
        {
          id: 1,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_large-2-1536x1151.jpg",
        },
        {
          id: 2,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_gallery01-1-1536x1152.jpg",
        },
        {
          id: 3,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_gallery02-1-1536x1153.jpg",
        },
        {
          id: 4,
          source:
            "https://monferrato.bike/app/uploads/2021/12/CNADNE2S21_gallery04-1-1536x1152.jpg",
        },
      ],
    },
  ];

  return { productsList };
};
