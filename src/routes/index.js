import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Recommend from "../pages/Recommend";
import Discover from "../pages/Discover";
import Library from "../pages/Library";

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/Recommend"} />,
      },
      {
        path: "/Recommend",
        component: Recommend,
      },
      {
        path: "/Discover",
        component: Discover,
      },
      {
        path: "/Library",
        component: Library,
      },
    ],
  },
];
