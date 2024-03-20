import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

export const FooterStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
}));

export const FooterLink = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const FooterButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "inherit",
    color: "inherit",
    boxShadow: "none",
  },
}));
