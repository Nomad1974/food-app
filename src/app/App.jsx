import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "../pages/home/Home";
import Main from "../pages/main/Main";


const App = () => {

  return (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="home" element={<Home />} />
            </Routes>
          )
}

export default App;