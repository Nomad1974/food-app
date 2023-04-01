import { Route, Routes } from "react-router-dom";
import Container from "../components/conteiner/Conteiner";
import Category from "../pages/category/category";
import Error from "../pages/Error/Error";

import Home from "../pages/home/Home";
import Main from "../pages/main/Main";
import Recipe from "../pages/recipe/Recipe";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="home" element={<Home />} />
                <Route path="category/:name" element={<Category />} />
                <Route path="meal/:id" element={<Recipe />} />
                <Route
                    path="*"
                    element={
                        <Container>
                            <Error />
                        </Container>
                    }
                />
            </Routes>
        </>
    );
}

export default App;