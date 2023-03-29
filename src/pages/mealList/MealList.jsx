import { useSelector } from "react-redux";
import Meal from "../meal/Meal";

import "./mealList.scss";
import { selectAllMeals } from "./mealListSlice";

const MealList = () => {
    const {meals} = useSelector(selectAllMeals)

    return (  
        <div className="list">
            {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
        </div>
    );
}

export default MealList;