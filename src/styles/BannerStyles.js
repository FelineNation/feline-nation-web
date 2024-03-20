import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const BannerStyle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  textAlign: "center",
  height: "auto",
  borderRadius: "0",
  fontFamily: "Comic Sans MS, cursive, sans-serif",
  alignItems: "center",
}));