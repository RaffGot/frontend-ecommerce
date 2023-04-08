import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RouterMain = ({ routes }) => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default RouterMain;
