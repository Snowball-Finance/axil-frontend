import React, { FC, forwardRef } from "react";
import { SnowModalProps } from "./types";
import { StyledDialog, Wrapper, ChildWrapper } from "./style";
import { Zoom, ZoomProps } from "@mui/material";

const Transition = forwardRef<HTMLDivElement, ZoomProps>((props, ref) => {
  return <Zoom ref={props.ref} {...props} timeout={300} />;
});

export const SnowModal: FC<SnowModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <StyledDialog
      TransitionComponent={Transition}
      fullScreen={false}
      open={isOpen}
      onClose={() => onClose()}
    >
      <Wrapper>
        <ChildWrapper>{children}</ChildWrapper>
      </Wrapper>
    </StyledDialog>
  );
};