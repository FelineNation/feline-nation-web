import { styled } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

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

export const BannerStyle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  textAlign: "center",
  height: "10px",
  borderRadius: "0",
  fontFamily: "Comic Sans MS, cursive, sans-serif",
  alignItems: "center",
}));
