import { useSelector } from "react-redux";

import useReturn from "../../features/useReturn";

import ReturnButton from "../../components/returnButton/ReturnButton";
import Meal from "../meal/Meal";

import { selectAllMeals } from "./mealListSlice";

const MealList = () => {
    const {meals} = useSelector(selectAllMeals)
    const [goBack] = useReturn();

    return ( 
        <>
            <ReturnButton className="return-button" onClick={goBack}/>
            <div className="list">
                {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
            </div>
        </>
    );
}

export default MealList;