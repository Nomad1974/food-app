import { useSelector } from "react-redux";

import useReturn from "../useReturn";

import ReturnButton from "../../components/returnButton/ReturnButton";
import Meal from "../meal/Meal";

import { selectAllMeals } from "./mealListSlice";

const MealList = () => {
    const {meals} = useSelector(selectAllMeals)
    const [goBack] = useReturn();

    return ( 
        <>
            <div className="list">
                {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
            </div>
            <ReturnButton className="return-button" onClick={goBack}/>
        </>
    );
}

export default MealList;