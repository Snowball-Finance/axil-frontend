import { Box, styled } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { CssVariables } from "../../../../styles/cssVariables/cssVariables";
import { ContainedButton } from "./containedButton";

export interface InfoButtonProps {
  title: string;
  icon: ReactNode;
  fullWidth?: boolean;
  contained?: boolean;
  onClick?: () => void;
}
export const InfoButton: FC<InfoButtonProps> = ({
  icon,
  title,
  onClick,
  contained,
  fullWidth,
}) => {
  return (
    <StyledContainedButton
      disableElevation
      onClick={onClick}
      {...{ fullWidth, contained }}
    >
      {title}
      <Box display="flex">{icon}</Box>
    </StyledContainedButton>
  );
};

const StyledContainedButton = styled(ContainedButton)({
  display: "flex",
  gap: "8px",
  backgroundColor: "transparent",
  color: CssVariables.primary,
  border: `1px solid ${CssVariables.primary}`,
  borderRadius: CssVariables.buttonBorderRadius,
  fontSize: "16px",
  fontWeight: 600,
  maxHeight: "32px",
  "&:hover": {
    color: CssVariables.white,
    path: {
      stroke: CssVariables.white,
    },
  },
});
