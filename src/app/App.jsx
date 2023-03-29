import { Link, Route, Routes } from "react-router-dom";
import Category from "../pages/category/category";

import Home from "../pages/home/Home";
import Main from "../pages/main/Main";

const App = () => {

  return (
            <>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="home" element={<Home />} />
                  <Route path="category/:name" element={<Category />} />
                </Routes>
            </>
          )
}

export default App;