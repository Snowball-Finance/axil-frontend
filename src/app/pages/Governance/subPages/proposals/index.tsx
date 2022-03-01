import { translations } from "locales/i18n";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material";
import { Max1040 } from "app/components/wrappers/max1040";
import { VotePower } from "../../components/votePower";
import { InfoButton } from "app/components/common/buttons/infoButton";
import { TopInfoCard } from "../../components/topInfoCard";
import { TopWrapper } from "./components/topWrapper";
import { ProposalsList } from "./components/list";
import { NewProposalForm } from "./newProposalForm";
import { mobile } from "styles/media";
import { env } from "environment";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { useDispatch } from "react-redux";
import {
  StakingPageActions,
  useStakingPageSlice,
} from "app/pages/Staking/slice";
import { DepositAndWithdrawTab } from "app/pages/Staking/types";
import { push } from "connected-react-router";
import { AppPages } from "app/types";

export const Proposals: FC = () => {
  const { t } = useTranslation();
  useStakingPageSlice();
  const dispatch = useDispatch();

  const handleStakeClick = () => {
    dispatch(
      StakingPageActions.setSelectedDepositAndWithdrawTab(
        DepositAndWithdrawTab.Deposit
      )
    );
    dispatch(push(AppPages.StakingPage));
    setTimeout(() => {
      document.getElementById("stakeButton")?.scrollIntoView();
    }, 100);
  };

  const actionButtons = [
    <ContainedButton key={1} height={32} onClick={handleStakeClick}>
      {`Stake ${env.MAIN_TOKEN_NAME}`}
    </ContainedButton>,
    <InfoButton key={2} title={t("Discord")} icon={<></>} />,
  ];

  return (
    <StyledMax1040 m="auto" mt={2}>
      <NewProposalForm />
      <Header>
        <TopInfoCard
          title={t(translations.GovernancePage.ActiveProposals())}
          desc={t(translations.GovernancePage.ActiveProposalsDescriptions())}
          actionButtons={actionButtons}
        />
        <VotePower />
      </Header>
      <TopWrapper />
      <ProposalsList />
    </StyledMax1040>
  );
};

const StyledMax1040 = styled(Max1040)(() => ({
  position: "relative",
  [mobile]: {
    padding: "0 16px",
  },
}));

const Header = styled("div")({
  display: "flex",
  gap: "6px",
  [mobile]: {
    flexDirection: "column",
    gap: "24px",
  },
});