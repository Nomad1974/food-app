import { Helmet } from "react-helmet";

import Container from "../../components/conteiner/Conteiner";
import MealList from "../mealList/MealList";
import Preloader from "../preloader/Preloader";
import Error from "../../pages/Error/Error";
import useCategory from "./usecategory";

const Category = () => {
    const [status, error] = useCategory();
    
    return ( 
        <>
            <Helmet>
                <title>
                    The food category list
                </title>
            </Helmet>
            <Container>
                {status === 'loading' && <Preloader />}
                {error && <Error />}
                {status === 'fullfilled' && <MealList />}
            </Container>
        </>
    );
}

export default Category;