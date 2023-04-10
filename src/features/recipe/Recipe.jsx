import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { loadRecipe, selectRecipe } from "./recipeSlice";
import Container from "../../components/conteiner/Conteiner";
import ReturnButton from "../../components/returnButton/ReturnButton";
import Preloader from "../preloader/Preloader";
import Error from "../../pages/Error/Error";
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
            <Helmet>
                <title>
                    The recipe detail
                </title>
            </Helmet>
            <Container>
                {status === 'loading' && <Preloader />}
                {error && <Error />}
                {status === 'fullfilled' && <RecipeDetails recipes={recipes}/>};
                <ReturnButton />
            </Container>
        </>
    );
}

export default Recipe;