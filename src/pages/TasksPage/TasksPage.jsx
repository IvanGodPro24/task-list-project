import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { TaskList } from "../../components/TaskList/TaskList";
import { selectIsLoading, selectError } from "../../redux/tasks/selectors";
import { fetchTasks } from "../../redux/tasks/operations";
import { AppBar } from "../../components/AppBar/AppBar";
import DocumentTitle from "../../DocumentTitle";

const TasksPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <AppBar />
      <TaskForm />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <TaskList />
    </>
  );
};

export default TasksPage;
