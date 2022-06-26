import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  CardActions as CardActionsContainer,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface CardActionsProps {
  productTitle: string;
}

export const CardActions: FC<CardActionsProps> = ({ productTitle }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const productIdPath = productTitle.replace(/ /g, "-").toLowerCase();

  return (
    <CardActionsContainer
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative"
      }}
    >
      <FormControlLabel
        control={<Checkbox color="default" />}
        label={t("compara")}
        sx={{ paddingLeft: 1 }}
        componentsProps={{
          typography: {
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
      />
      <Button
        variant="contained"
        onClick={() => navigate(`/pdp/${productIdPath}`)}
        endIcon={<ArrowForwardIcon />}
        color="primary"
        sx={{
          width: 124,
          height: 48,
          position: "absolute",
          bottom: 0,
          right: 0,
          borderRadius: 0,
          fontWeight: "bold",
          fontStyle: "italic",
          boxShadow: 0,
        }}
      >
        {t("scopri")}
      </Button>
    </CardActionsContainer>
  );
};
