import React, { FC } from "react";
import { styled, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { CssVariables } from "styles/cssVariables/cssVariables";
import { PoolCardItemProps } from "app/pages/Liquidity/types";
import { LiquidityPageSelectors } from "app/pages/Liquidity/selectors";
import { TokenImages } from "app/pages/Liquidity/components/TokenImages";
import { Info } from "./Info";
import { ActionButtons } from "./ActionButtons";
import { mobile } from "styles/media";

export const PoolCardItem: FC<PoolCardItemProps> = ({ poolKey }) => {
  const liquidityPool = useSelector(
    LiquidityPageSelectors.liquidityPool(poolKey)
  );
  return (
    <StyledPoolCard>
      <StyledPoolContainer container>
        <Grid item>
          <StyledPoolChildContainer container>
            <Grid item>
              <PoolHeaderText variant="h2">{liquidityPool.name}</PoolHeaderText>
            </Grid>

            {liquidityPool?.poolData?.isPaused && (
              <Grid item>
                <Tag variant="h2">Paused</Tag>
              </Grid>
            )}

            <Grid item>
              <Info poolKey={poolKey} />
            </Grid>
          </StyledPoolChildContainer>
        </Grid>

        <StyledFullChildContainer item>
          <StyledPoolChildContainer container>
            <StyledFullChildContainer item>
              <TokenImages poolKey={poolKey} />
            </StyledFullChildContainer>

            <StyledFullChildContainer item>
              <ActionButtons poolKey={poolKey} />
            </StyledFullChildContainer>
          </StyledPoolChildContainer>
        </StyledFullChildContainer>
      </StyledPoolContainer>
    </StyledPoolCard>
  );
};

const StyledPoolCard = styled("div")({
  backgroundColor: CssVariables.poolCardBackground,
  border: `4px solid ${CssVariables.cardBorder}`,
  borderRadius: "20px",
  padding: "26px 36px",
});

const StyledPoolContainer = styled(Grid)({
  flexDirection: "column",
  rowGap: 20,

  [mobile]: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    columnGap: 20,
  },
});

const StyledPoolChildContainer = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",

  [mobile]: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: 20,
  },
});

const PoolHeaderText = styled(Typography)({
  color: CssVariables.white,
  textTransform: "uppercase",
});

const Tag = styled(Typography)({
  color: CssVariables.error,
  textTransform: "uppercase",
});

const StyledFullChildContainer = styled(Grid)({
  [mobile]: {
    width: "100%",
  },
});
