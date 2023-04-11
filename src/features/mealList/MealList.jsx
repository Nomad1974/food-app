import ReturnButton from "../../components/returnButton/ReturnButton";
import Meal from "../meal/Meal";
import useMealList from "./useMealList";

const MealList = () => {
    const [meals, goBack] = useMealList();

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