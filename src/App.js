import React from "react";

//Routing

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles
import { GlobalStyle } from "./GlobalStyle";

//Components
import Header from "./components/Header/Header";
import Home from "./Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Test from "./components/Test/Test";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/test" element={<Test />} />
    </Routes>

    <GlobalStyle />
  </Router>
);

export default App;
