import { Link } from "react-router-dom";

//import "./meal.scss";

const Meal = ({strMeal, strMealThumb, idMeal}) => {

    return ( 
            <div className="card">
                <div className="card_image">
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="card_content">
                    <span className="card_content__title">
                        {strMeal}
                    </span>
                </div>
                <div className="card_actions">
                    <Link 
                        to={`/meal/${idMeal}`}
                        className="card_actions__btn">
                            рецепт
                    </Link>
                </div>
            </div>
    );
}

export default Meal;