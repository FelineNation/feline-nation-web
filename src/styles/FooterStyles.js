import { styled } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { Paper, Box } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    primary: {
      main: "#fff",
    },
  },
});

export const FooterStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  padding: theme.spacing(2),
  textAlign: "center",
  height: "10px",
  borderRadius: "0",
  fontFamily: "Comic Sans MS, cursive, sans-serif",
  alignItems: "center",
  bottom: "0",
}));
