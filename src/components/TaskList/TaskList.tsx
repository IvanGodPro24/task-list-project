import { useAppSelector } from "../../hooks";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "../../redux/filters/selectors";

export const TaskList = () => {
  const tasks = useAppSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
