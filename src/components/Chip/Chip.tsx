import {
  Box,
  Chip as ChipContainer,
  ChipProps as ChipContainerProps,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface ChipProps extends ChipContainerProps {
  title: string;
  value: string;
  titleColor?: string;
  valueColor?: string;
}

export const Chip: FC<ChipProps> = ({
  title,
  value,
  titleColor,
  valueColor,
  ...props
}) => {
  return (
    <ChipContainer
      {...props}
      size="small"
      sx={{ width: "fit-content", borderRadius: 0 }}
      label={
        <Box display="flex" justifyContent="space-between" flexDirection="row">
          <Typography
            variant="subtitle2"
            color={titleColor}
            fontWeight={700}
            fontStyle="italic"
            textTransform="uppercase"
            paddingRight={2}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color={valueColor}
            fontWeight={700}
            fontStyle="italic"
            textTransform="uppercase"
          >
            {value}
          </Typography>
        </Box>
      }
    />
  );
};
