import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const theme = createTheme({
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    primary: {
      main: "#333",
    },
  },
});

export const NavbarButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 1,
}));
