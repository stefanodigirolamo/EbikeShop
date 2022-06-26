import { useMemo } from "react";

export const useRatingValue = (value: number) => {
  const ratingValue = useMemo(() => {
    return value <= 20000
      ? 1
      : value <= 40000
      ? 2
      : value <= 60000
      ? 3
      : value <= 80000
      ? 4
      : 5;
  }, [value]);

  return { ratingValue };
};
