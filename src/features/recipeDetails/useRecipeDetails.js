import { useSelector } from "react-redux";

import { selectRecipe } from "../recipe/recipeSlice";

const useRecipeDetails = () => {
    const {recipes} = useSelector(selectRecipe);

    return [recipes];
}

export default useRecipeDetails;