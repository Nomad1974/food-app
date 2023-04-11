import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadMeals, selectAllMeals } from "../mealList/mealListSlice";

const useCategory = () => {
    const dispatch = useDispatch();
    const {meals, status, error} = useSelector(selectAllMeals);
//вытаскиваем имя категории
    const {name} = useParams();

    useEffect(() => {
        if(!meals.length) {
            dispatch(loadMeals(name));
        }
    }, [name, meals.length, dispatch]);

    return [status, error];
}

export default useCategory;