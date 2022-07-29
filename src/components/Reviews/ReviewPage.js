import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteReview, getReviews } from "../../redux/actions/reviewAction";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ReviewPage() {


  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.allReviews.reviews);


  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);


  const handleDeleted = (id) => {
    if (window.confirm("Are you sure wanted to delete the Review")) {
      dispatch(deleteReview(id));
    }
  };

  

  return (
    <div className="user-roles">
        <h1>Review Page</h1>
      <TableContainer component={Paper} className="user-table">
        <Table sx={{ minWidth: 700 }}  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Text</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review) => (
              <StyledTableRow key={review.id}>
                <StyledTableCell align="left">{review.commend}</StyledTableCell>
                <StyledTableCell align="right" className="delete-user-icon">
                  <DeleteIcon onClick={() => handleDeleted(review.id)} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
