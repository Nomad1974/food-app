import useRecipeDetails from "./useRecipeDetails";

import "./recipeDetails.scss";

const RecipeDetails = () => {
    const [recipes] = useRecipeDetails();

    return (  
        <div className="recipe">
            <img src={recipes.strMealThumb} alt={recipes.strMeal} />
            <h1 className="recipe_header">{recipes.strMeal}</h1>
            <h6 className="recipe_subtitle">Category: {recipes.strCategory}</h6>
            {recipes.strArea ? <h6 className="recipe_subtitle">Area: {recipes.strArea}</h6> : null}
            <p className="recipe_description">
                {recipes.strInstructions}
            </p>
            {/* создаём заголовки таблицы для ингредиентов */}
            <table className="recipe_ingredients-header">
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* создаём объект с ключами  и проходим его мапом. получаем ингредиенты из списка с заполненным значением. потом получаем количество ингредиента вырезая номер соответствия слайсом из строки, что бы он соответствовал ингредиенту */}
                    {
                        Object.keys(recipes).map(key => {
                            if(key.includes('Ingredient') && recipes[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipes[key]}</td>
                                        <td>{
                                            recipes[`strMeasure${key.slice(13)}`]
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                            return null;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default RecipeDetails;