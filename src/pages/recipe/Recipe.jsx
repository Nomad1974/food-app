import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadRecipe, selectRecipe } from "./recipeSlice";
import Container from "../../components/conteiner/Conteiner";
import ReturnButton from "../../components/returnButton/ReturnButton";
import Preloader from "../../features/preloader/Preloader";
import Error from "../Error/Error";
import RecipeDetails from "../recipeDetails/RecipeDetails";

const Recipe = () => {
    const dispatch = useDispatch();
    const {recipes, status, error} = useSelector(selectRecipe);
    const {id} = useParams();

    useEffect(() => {
        dispatch(loadRecipe(id))
    }, [id, dispatch]);

    return (  
        <>
            <Container>
                <ReturnButton />
                {status === 'loading' && <Preloader />}
                {error && <Error />}
                {status === 'fullfilled' && <RecipeDetails recipes={recipes}/>};
            </Container>
        </>
    );
}

export default Recipe;