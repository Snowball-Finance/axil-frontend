import { FC } from "react";
import { styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { translations } from "locales/i18n";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { CardWrapper } from "app/components/wrappers/Card";

export const Message: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledCardWrapper>
      <Text variant="body2">
        {t(translations.GovernancePage.VoteAllocation.VoteMessage())}
      </Text>
    </StyledCardWrapper>
  );
};

const Text = styled(Typography)({
  color: CssVariables.white,
});

const StyledCardWrapper=styled(CardWrapper)({
  maxWidth:`calc(100vw - 65px)`
})
