import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/conteiner/Conteiner";
import "./recipe.scss";
import { loadRecipe, selectRecipe } from "./recipeSlice";

const Recipe = () => {
    const dispatch = useDispatch();
    const {recipes} = useSelector(selectRecipe);
    const {id} = useParams();

    useEffect(() => {
        dispatch(loadRecipe(id))
    }, [id, dispatch]);
    console.log(recipes);

    return (  
        <>
            <Container>

            </Container>
        </>
    );
}

export default Recipe;