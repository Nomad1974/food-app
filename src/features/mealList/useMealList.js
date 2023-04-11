import { useSelector } from "react-redux";

import { selectAllMeals } from "./mealListSlice";
import useReturn from "../useReturn";

const useMealList = () => {
    const {meals} = useSelector(selectAllMeals)
    const [goBack] = useReturn();

    return [meals,goBack];
}

export default useMealList;