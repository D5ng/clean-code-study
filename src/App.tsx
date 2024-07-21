import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./utils/constants/routes";
import HomePage from "./page/HomePage";
import TodoPage from "./page/TodoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.todo} element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
