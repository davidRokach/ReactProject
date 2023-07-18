import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import CardDeleteDialog from "../../components/DeleteDialog";
import CardCrm from "../components/CardCrm";
import TableCrm from "../components/TableCrm";

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
      <CardCrm
        users={users}
        handleDialog={handleDialog}
        handleChangeBusinessStatus={handleChangeBusinessStatus}
      />
      <TableCrm
        users={users}
        handleDialog={handleDialog}
        handleChangeBusinessStatus={handleChangeBusinessStatus}
      />
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
