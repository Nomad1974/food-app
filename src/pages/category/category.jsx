import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { loadMeals, selectAllMeals } from "../mealList/mealListSlice";

import Container from "../../components/conteiner/Conteiner";
import MealList from "../mealList/MealList";
import Preloader from "../../features/preloader/Preloader";
import Error from "../Error/Error";

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
                {error ? <Error /> : <MealList />}
            </Container>
        </>
    );
}

export default Category;