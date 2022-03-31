import React, { FC, useEffect } from "react";
import { styled, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { translations } from "locales/i18n";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { CurrencyInput } from "./CurrencyInput";
import { Selection } from "./Selection";
import { WithdrawSlider } from "./slider";
import { useParams } from "react-router-dom";
import { getKeyFromPoolIndex } from "app/pages/Liquidity/constants";
import { useDispatch } from "react-redux";
import { pools } from "app/pools";
import { Pool } from "app/containers/Rewards/types";
import { LiquidityPageActions } from "app/pages/Liquidity/slice";
import { WithdrawButton } from "./withdrawButton";
import { PercentageText } from "./percentageText";
import { mobile } from "styles/media";
import { formatBNToPercentString } from "app/containers/utils/contractUtils";
import { BonusText } from "./bonusText";

type TParams = { poolIndex: string };

export const WithdrawInput: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { poolIndex } = useParams<TParams>();
  const poolKey = getKeyFromPoolIndex(poolIndex) || "";

  useEffect(() => {
    if (poolKey) {
      const pool = pools[poolKey] as Pool;
      dispatch(LiquidityPageActions.setSelectedPool(pool));
    }
  }, [poolKey]);
  return (
    <StyledWithdrawInput>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <HeaderText variant="h4">
            {t(translations.LiquidityPage.Withdraw.Title())}
          </HeaderText>
        </Grid>

        <Grid item>
          <WithdrawSlider />
        </Grid>

        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={8}>
              <SubtitleText variant="body2">
                {t(translations.LiquidityPage.Withdraw.WithdrawlPercentage())}{" "}
                (%):
              </SubtitleText>
            </Grid>

            <Grid item xs={4}>
              <PercentageText />
            </Grid>
          </Grid>
        </Grid>

        <Selection />

        <CurrencyInput />

        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <SubtitleText variant="body2">
                {t(translations.LiquidityPage.Withdraw.Bonus())} (%):
              </SubtitleText>
            </Grid>

            <Grid item>
              <SubtitleText variant="body2">
                <BonusText />
              </SubtitleText>
            </Grid>
          </Grid>
        </Grid>

        <Grid item alignSelf="center">
          <WithdrawButton />
        </Grid>
      </Grid>
    </StyledWithdrawInput>
  );
};

const StyledWithdrawInput = styled("div")({
  width: 600,
  margin: "0 auto",
  backgroundColor: CssVariables.poolCardBackground,
  border: `4px solid ${CssVariables.cardBorder}`,
  borderRadius: "20px",
  padding: "40px",

  [mobile]: {
    width: "100%",
    padding: "20px",
  },
});

const HeaderText = styled(Typography)({
  color: CssVariables.white,
  fontSize: "26px",
});

const SubtitleText = styled(Typography)({
  color: CssVariables.bodyTextColor,
  fontSize: "16px",
});
