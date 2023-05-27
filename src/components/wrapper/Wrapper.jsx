import { Sidebar } from "../sidebar/Sidebar";
import "./wrapper.css";
import { Storybar } from "../storybar/Storybar";
import { Explore } from "../explore/Explore";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "../posts/Posts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Storybar />
        <RouterProvider router={router} />
        {/* <Explore /> */}
      </div>
    </div>
  );
};
