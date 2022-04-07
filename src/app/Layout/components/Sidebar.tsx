import React, { ReactElement } from "react";
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { translations } from "locales/i18n";
import { CssVariables } from "styles/cssVariables/cssVariables";
import SocialLinks from "./SocialLink";
import { navigationRoutes } from "../constants";

export default function Sidebar(): ReactElement {
  const { t } = useTranslation();

  return (
    <StyledSidebar>
      <List>
        {navigationRoutes.map((nav) => (
          <ListItem key={nav.name}>
            <ListNavItem
              exact
              to={nav.to}
              isActive={(match, location) => {
                let pathStrings = location.pathname.split("/");

                if (match) {
                  return true;
                } else if (pathStrings[1] === nav.name) {
                  return true;
                } else {
                  return false;
                }
              }}
            >
              <TestWrapper>
                <h1 data-heading={t(translations.Navigation[nav.name]())}>
                  {t(translations.Navigation[nav.name]())}
                </h1>
              </TestWrapper>
            </ListNavItem>
          </ListItem>
        ))}
      </List>

      <SocialLinks />
    </StyledSidebar>
  );
}

const StyledSidebar = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "85vh",
  paddingLeft: "25%",
  marginTop: 50,
});

const List = styled("ul")({
  listStyleType: "none",
  minWidth: "355px",
  ".active": {
    h1: {
      color: CssVariables.green,
      borderBottom: `2px solid`,
      lineHeight: 1,
    },
  },
});

const ListItem = styled("li")({
  display: "block",
  paddingTop: 20,
  paddingBottom: 20,
});

const ListNavItem = styled(NavLink)({
  textDecoration: "none",
  color: CssVariables.white,
});
const TestWrapper = styled("div")`
  --letterSpacingOnHover: 4px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  h1 {
    text-transform: uppercase;
    transform: translate(0px, 0px) skew(0deg, 0);
    margin: 0;
    font-size: 42px;
    font-weight: 400;
    white-space: nowrap;
    color: ${CssVariables.white};
    letter-spacing: 0;
    z-index: 1;
    transition: all 0.175s linear;
    &:hover {
      transform: translate(0px, 0px) skew(-5deg, 0);
      letter-spacing: var(--letterSpacingOnHover);
    }
  }
  h1:hover::before {
    left: 4px;
    top: 4px;
    letter-spacing: var(--letterSpacingOnHover);
  }
`;
