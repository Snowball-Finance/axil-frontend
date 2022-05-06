import { FC } from "react";
import {
  styled,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useSelector } from "react-redux";

import { CssVariables, FontFamilies } from "styles/cssVariables/cssVariables";
import {
  selectGauges,
  selectIsLoadingUserPoolsAndGauges,
} from "app/containers/PoolsAndGauges/selectors";
import { tableHeader } from "./constants";
import { formatNumber } from "common/format";

export const AllocationTable: FC = () => {
  const gauges = useSelector(selectGauges);
  const isLoading = useSelector(selectIsLoadingUserPoolsAndGauges);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <StyledTable aria-label="customized table">
      <StyledTableHead>
        <TableRow>
          {tableHeader().map((header) => {
            return (
              <StyledTableCell key={header.key}>{header.label}</StyledTableCell>
            );
          })}
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {gauges.map((gauge) => (
          <StyledTableRow key={gauge.address}>
            <StyledTableCell component="th" scope="row">
              {gauge.depositTokenName}
            </StyledTableCell>
            <StyledTableCell>
              {formatNumber(gauge.allocPoint, 2)}
            </StyledTableCell>
            <StyledTableCell>{"-"}</StyledTableCell>
            <StyledTableCell>{"-"}</StyledTableCell>
            <StyledTableCell>{"-"}</StyledTableCell>
            <StyledTableCell>{"-"}</StyledTableCell>
            <StyledTableCell>{"-"}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

const StyledTable = styled(Table)({
  minWidth: 700,
  backgroundColor: "transparent",
  borderStyle: "hidden",
  borderRadius: "20px",
  boxShadow: `0 0 0 4px ${CssVariables.cardBorder}`,
  overflow: "auto",
});

const StyledTableHead = styled(TableHead)({
  backgroundColor: CssVariables.tableHeadColor,
  border: 0,
});

const StyledTableRow = styled(TableRow)({
  "td, tr, th": {
    border: 0,
    color: CssVariables.white,
    fontSize: "16px",
    fontFamily: FontFamilies.IBMPlexSans,
  },

  th: {
    fontWeight: "bold",
  },
});

const StyledTableCell = styled(TableCell)({
  borderBottom: `4px solid ${CssVariables.cardBorder}`,
  color: CssVariables.white,
  fontSize: "12px",
  fontFamily: FontFamilies.IBMPlexSans,

  "&:first-child": {
    borderRadius: "20px 0px 0px 0px",
  },

  "&:last-child": {
    borderRadius: "0px 20px 0px 0px",
  },
});