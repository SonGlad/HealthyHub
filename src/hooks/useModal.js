import { useSelector } from "react-redux";
import {
  selectShowModalWater,
  selectShowModalRecord,
  getShowModalUpdateRecord,
  selectShowMealType,
  getStatusModalUserMenu,
  getStatusModalGoal,
  getStatusModalWeight,
} from "../redux/Modal/modal-selectors";

export const useModal = () => {
  const isModalOpenWater = useSelector(selectShowModalWater);
  const isModalOpenRecord = useSelector(selectShowModalRecord);
  const isModalOpenUpdateRecord = useSelector(getShowModalUpdateRecord);
  const mealType = useSelector(selectShowMealType);
  const isModalCloseUserMenu = useSelector(getStatusModalUserMenu);
  const isModalShowGoal = useSelector(getStatusModalGoal);
  const isModalShowWeight = useSelector(getStatusModalWeight);

  return {
    isModalOpenWater,
    isModalOpenRecord,
    isModalOpenUpdateRecord,
    mealType,
    isModalCloseUserMenu,
    isModalShowGoal,
    isModalShowWeight,
  };
};
