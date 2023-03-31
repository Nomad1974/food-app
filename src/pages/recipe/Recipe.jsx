import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadRecipe, selectRecipe } from "./recipeSlice";
import Container from "../../components/conteiner/Conteiner";
import ReturnButton from "../../components/returnButton/ReturnButton";
import Preloader from "../../features/preloader/Preloader";
import Error from "../Error/Error";

import "./recipe.scss";

const Recipe = () => {
    const dispatch = useDispatch();
    const {recipes, status, error} = useSelector(state => state.recipe);
    const {id} = useParams();

    useEffect(() => {
        dispatch(loadRecipe(id))
    }, [id, dispatch]);

    return (  
        <>
            <Container style={{background:'none'}}>
                {status === 'loading' && <Preloader />}
                {status === 'fullfilled' && recipes === null ? <Error /> : ''}
                {error && <Error />}
                <ReturnButton />
                <div className="recipe">
                    <img src={recipes.strMealThumb} alt={recipes.strMeal} />
                    <h1 className="recipe_header">{recipes.strMeal}</h1>
                    <h6 className="recipe_subtitle">Категория: {recipes.strCategory}</h6>
                    {recipes.strArea ? <h6 className="recipe_subtitle">территория: {recipes.strArea}</h6> : null}
                    
                </div>


            </Container>
        </>
    );
}

export default Recipe;