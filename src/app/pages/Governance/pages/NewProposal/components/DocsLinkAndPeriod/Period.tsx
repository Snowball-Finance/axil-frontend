import { FC } from "react";
import {
  Grid,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { translations } from "locales/i18n";
import { CssVariables, FontFamilies } from "styles/cssVariables/cssVariables";
import ClockIcon from "assets/images/iconComponents/clock";
import ExternalLinkIcon from "assets/images/iconComponents/externalLink";
import { GovernancePageSelectors } from "app/pages/Governance/selectors";
import { GovernancePageActions } from "app/pages/Governance/slice";
import { env } from "environment";
import { isInvalidPeriod } from "../../utils/period";

export const Period: FC = () => {
  const { t } = useTranslation();

  const fieldName = "votingPeriod";
  const dispatch = useDispatch();
  const votingPeriod = useSelector(
    GovernancePageSelectors.selectNewProposalField(fieldName)
  );

  const handleInputChange = (value: string) => {
    dispatch(
      GovernancePageActions.setNewProposalFields({ key: fieldName, value })
    );
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <ClockIcon color={CssVariables.commonTextColor} />
          </Grid>

          <Grid item>
            <Text variant="body1">Voting Period</Text>
          </Grid>

          <Grid item>
            <ExternalLinkIcon color={CssVariables.primary} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <InputField
          margin="dense"
          size="small"
          error={isInvalidPeriod(votingPeriod)}
          onChange={({ target }) => handleInputChange(target.value)}
          helperText={
            isInvalidPeriod(votingPeriod)
              ? t(translations.GovernancePage.VotingPeriodShouldBeBetween(), {
                  min: env.MINIMUM_VOTING_PERIOD,
                  max: env.MAXIMUM_VOTING_PERIOD,
                  unit: env.MINIMUM_VOTING_PERIOD_UNIT,
                })
              : undefined
          }
          value={votingPeriod}
          fullWidth
          type="number"
          placeholder={t(translations.GovernancePage.PeriodInDaysToVote())}
          InputProps={{
            inputProps: {
              min: env.MINIMUM_VOTING_PERIOD,
              max: env.MAXIMUM_VOTING_PERIOD,
            },
            endAdornment: (
              <InputAdornment position="end">
                {env.MINIMUM_VOTING_PERIOD_UNIT}
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: Number(env.MINIMUM_VOTING_PERIOD),
            max: Number(env.MAXIMUM_VOTING_PERIOD),
          }}
        />
      </Grid>
    </Grid>
  );
};

const Text = styled(Typography)({
  color: CssVariables.white,
});

const InputField = styled(TextField)({
  ".MuiInputBase-root": {
    color: CssVariables.white,
    fontSize: "16px",
    fontFamily: FontFamilies.IBMPlexSans,
    backgroundColor: CssVariables.swapInputbackground,
    border: `4px solid ${CssVariables.cardBorder}`,
    borderRadius: "20px",
  },
  ".MuiInputAdornment-root": {
    p: {
      color: CssVariables.white,
    },
  },
});
