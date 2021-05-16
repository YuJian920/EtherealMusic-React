import React from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "../routes";

export default function App() {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>;
}
