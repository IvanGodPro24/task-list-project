import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filters/filtersSlice";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { StatusFilterType } from "../../redux/filters/filters.types";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter: StatusFilterType) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        variant={filter === "all" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        variant={filter === "active" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        variant={filter === "completed" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
