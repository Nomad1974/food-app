import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { loadMeals, selectAllMeals } from "../mealList/mealListSlice";

import Container from "../../components/conteiner/Conteiner";
import MealList from "../mealList/MealList";
import Preloader from "../preloader/Preloader";
import Error from "../../pages/Error/Error";

const Category = () => {
//вытаскиваем имя категории
    const {name} = useParams();

    const dispatch = useDispatch();
    const {meals, status, error} = useSelector(selectAllMeals);

    useEffect(() => {
        if(!meals.length) {
            dispatch(loadMeals(name));
        }
    }, [name, meals.length, dispatch]);
    return ( 
        <>
            <Container>
                {status === 'loading' && <Preloader />}
                {error && <Error />}
                {status === 'fullfilled' && <MealList />}
            </Container>
        </>
    );
}

export default Category;