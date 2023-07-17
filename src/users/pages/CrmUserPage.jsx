import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import DeleteIcon from "@mui/icons-material/Delete";
import CardDeleteDialog from "../../components/DeleteDialog";
import { useSnackbar } from "../../provider/SnackbarProvider";

const CrmUserPage = () => {
  const {
    handleGetUsers,
    value,
    handleDeleteUser,
    handleChangeBusinessStatus,
  } = useUsers();

  const { users, user } = value;

  useEffect(() => {
    handleGetUsers();
  }, []);

  const [isDialogopen, setDialog] = useState(false);
  const [userId, setuserId] = useState(null);

  const snack = useSnackbar();

  const handleDialog = (term, id) => {
    if (term === "open") {
      setDialog(true);
      setuserId(id);
      return;
    }
    setDialog(false);
  };

  const onDeleteUser = () => {
    handleDialog();
    handleDeleteUser(userId);
  };
  if (!user?.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;
  if (!users?.length)
    return (
      <div>
        <br /> <br /> opps.., there are no users dorm the data base
      </div>
    );

  return (
    <>
      <PageHeader
        title="CRM users"
        subtitle="here you can see all the users and update and delete them "
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">isAdmin</TableCell>
              <TableCell align="right">isBusiness</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user._id}
                </TableCell>
                <TableCell align="right">
                  {user.name.first + " " + user.name.last}
                </TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">
                  <Checkbox checked={user.isAdmin} />
                </TableCell>
                <TableCell align="right">
                  <Checkbox
                    checked={user.isBusiness}
                    onClick={(e) => {
                      const updateUser = handleChangeBusinessStatus(user._id);
                      e.target.value = updateUser.isBusiness;
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete card"
                    onClick={() => {
                      if (user.isAdmin)
                        return snack(
                          "You cannot delete a user of type admin",
                          "error"
                        );
                      handleDialog("open", user._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CardDeleteDialog
        isDialogopen={isDialogopen}
        onDelete={onDeleteUser}
        onChangeDialog={handleDialog}
        object={"user"}
      />
    </>
  );
};

export default CrmUserPage;
