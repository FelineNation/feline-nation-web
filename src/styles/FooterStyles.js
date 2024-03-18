import { styled } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    primary: {
      main: "#000",
    },
  },
});

export const FooterStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
}));

export const FooterLink = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
