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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { deleteRole, getRoles } from "../../redux/actions/roleActions";

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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function RoleList() {

  const roles = useSelector((state) => state.allRoles.roles);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const handleDeleted = (id) => {
    if (window.confirm("Are you sure wanted to delete the role")) {
      dispatch(deleteRole(id));
    }
  };


  return (
    <div className="user-roles">
      <Button onClick={() => history.push(`/createRole`)} style={{float:"right"}}>Create Role</Button>
      <TableContainer component={Paper} className="user-table">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles &&
              roles.map((role) => (
                <StyledTableRow key={role.id}>
                  <StyledTableCell component="th" scope="row">
                    {role.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{role.name}</StyledTableCell>
                  <StyledTableCell align="right" className="edit-user-icon">
                    <EditIcon onClick={() => history.push(`/editRole/${role.id}`)} />
                  </StyledTableCell>
                  <StyledTableCell align="right" className="delete-user-icon">
                    <DeleteIcon onClick={() => handleDeleted(role.id)}  />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
