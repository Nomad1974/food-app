import { Helmet } from "react-helmet";

import Container from "../../components/conteiner/Conteiner";
import ReturnButton from "../../components/returnButton/ReturnButton";
import Preloader from "../preloader/Preloader";
import Error from "../../pages/Error/Error";
import RecipeDetails from "../recipeDetails/RecipeDetails";
import useRecipe from "./useRecipe";

const Recipe = () => {
    const [recipes, status, error] = useRecipe();

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