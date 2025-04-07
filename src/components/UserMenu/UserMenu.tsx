import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";
import { lightBlue } from "@mui/material/colors";
import { useAppDispatch } from "../../redux/store.types";

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p className={css.user}>Welcome, {user.name}!</p>
      <Avatar
        sx={{ bgcolor: lightBlue[500] }}
        alt={user.name ?? undefined}
        src="/broken-image.jpg"
      />
      <Button
        variant="outlined"
        color="secondary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
