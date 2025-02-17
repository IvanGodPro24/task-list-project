import Button from "@mui/material/Button";
import css from "./TaskForm.module.css";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/operations";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { toast } from "sonner";
import { useId } from "react";

const TaskSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const initialValues = {
  text: "",
};

export const TaskForm = () => {
  const textId = useId();

  const dispatch = useDispatch();

  const handleSubmit = ({ text }, actions) => {
    if (text.trim() === "") {
      toast.error("Task can not be empty!");
      return;
    }

    dispatch(addTask(text));

    toast.success("Task has been added!");

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TaskSchema}
    >
      <Form className={css.form}>
        <label htmlFor={textId} />
        <Field
          component={TextField}
          className={css.field}
          type="text"
          name="text"
          id={textId}
          label="Enter task"
          variant="filled"
          placeholder="Enter task text..."
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
          }}
        />
        <ErrorMessage name="name" component="span" className="error" />

        <Button variant="outlined" className={css.btn} type="submit">
          Add task
        </Button>
      </Form>
    </Formik>
  );
};
