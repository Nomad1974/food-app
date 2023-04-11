import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadRecipe, selectRecipe } from "./recipeSlice";

const useRecipe = () => {
    const dispatch = useDispatch();
    const {recipes, status, error} = useSelector(selectRecipe);
    const {id} = useParams();

    useEffect(() => {
        dispatch(loadRecipe(id))
    }, [id, dispatch]);

    return [recipes, status, error];
}

export default useRecipe;