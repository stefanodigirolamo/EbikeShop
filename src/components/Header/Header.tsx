import { Stack, Switch, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HeaderContainer } from "./style";

export const Header = () => {
  const { i18n } = useTranslation();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleLangChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const langChecked = evt.target.checked;    
    i18n.changeLanguage(!langChecked ? 'it' : 'en');
  };

  return (
    <HeaderContainer position="fixed">
      <Typography variant="subtitle1" fontWeight="bold">
        e-bike shop
      </Typography>
      <Stack direction="row" spacing={.5} alignItems="center">
        <Typography variant="subtitle1" fontWeight="bold">it</Typography>
        <Switch {...label} color="default" onChange={(evt) => handleLangChange(evt)}  />
        <Typography variant="subtitle1" fontWeight="bold">en</Typography>
      </Stack>
    </HeaderContainer>
  );
};
