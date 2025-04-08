import css from "./TaskCounter.module.css";
import { useAppSelector } from "../../hooks";
import { selectTaskCount } from "../../redux/tasks/selectors";

export const TaskCounter = () => {
  const count = useAppSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
