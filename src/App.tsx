import "./App.css";
import Home from "./modules/Home";
import Apply from "./modules/applicant/Apply";
import JobListings from "./modules/applicant/JobListings";
import ATSPage from "./modules/ats/ATSPage";
import AddPosition from "./modules/recruiter/AddPosition";
import JobPosts from "./modules/recruiter/JobPosts";
import Footer from "./modules/shared/Footer";
import Header from "./modules/shared/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <JobListings />,
        },
        {
          path: "/add-position",
          element: <AddPosition />,
        },
        {
          path: "/job-posts",
          element: <JobPosts />,
        },
        {
          path: "/ats/:jobid",
          element: <ATSPage />,
        },
        {
          path: "/:jobtitle/apply/:jobid",
          element: <Apply />,
        },
      ],
    },
  ]);
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router}></RouterProvider>
      </DndProvider>
    </>
  );
}

export default App;
