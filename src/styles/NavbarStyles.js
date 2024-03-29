import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { AppBar } from "@mui/material";

export const NavbarButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 1,
}));

export const ThemedAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  position: "static",
  boxShadow: "none",
}));

export const ThemedToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "space-between",
}));