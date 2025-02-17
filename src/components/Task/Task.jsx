import { MdClose } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import css from "./Task.module.css";
import { Box, Checkbox, TextField } from "@mui/material";
import { lightBlue, blueGrey } from "@mui/material/colors";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  toggleCompleted,
} from "../../redux/tasks/operations";
import { useState } from "react";
import { toast } from "sonner";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));

    toast.info("Task has been deleted!");
  };

  const handleToggle = () => dispatch(toggleCompleted(task));

  const handleEdit = () => setEdit(true);

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: editedText }));

    toast.success("Task has been edited!");
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <TextField
            type="text"
            name="edit-text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                color: "white",
              },
            }}
          />

          <Button type="button" className="" onClick={handleSave}>
            Save
          </Button>
        </Box>
      ) : (
        <div className={css.wrapper}>
          <Checkbox
            checked={task.completed}
            onChange={handleToggle}
            sx={
              ({ "& .MuiSvgIcon-root": { fontSize: 30 } },
              {
                color: blueGrey[800],
                "&.Mui-checked": {
                  color: lightBlue[600],
                },
              })
            }
          />
          <p className={css.text}>{task.text}</p>
          <button className={css.btn} onClick={handleEdit}>
            <HiOutlinePencilAlt size={24} />
          </button>
          <button className={css.btn} onClick={open}>
            <MdClose size={24} />
          </button>

          <Dialog
            open={isOpen}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Box sx={{ backgroundColor: "#eeeff1" }}>
              <DialogTitle id="alert-dialog-title">
                {"Are you sure?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You will completely delete this task
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={handleDelete} autoFocus>
                  Delete
                </Button>
              </DialogActions>
            </Box>
          </Dialog>
        </div>
      )}
    </>
  );
};
