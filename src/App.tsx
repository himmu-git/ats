import { lazy, Suspense } from "react";
import Home from "./modules/Home";
const Apply = lazy(() => import("./modules/applicant/Apply"));
const JobListings = lazy(() => import("./modules/applicant/JobListings"));
const ATSPage = lazy(() => import("./modules/ats/ATSPage"));
const AddPosition = lazy(() => import("./modules/recruiter/AddPosition"));
const JobPosts = lazy(() => import("./modules/recruiter/JobPosts"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <JobListings />
            </Suspense>
          ),
        },
        {
          path: "/add-position",
          element: (
            <Suspense>
              <AddPosition />
            </Suspense>
          ),
        },
        {
          path: "/job-posts",
          element: (
            <Suspense>
              <JobPosts />
            </Suspense>
          ),
        },
        {
          path: "/ats/:jobid",
          element: (
            <Suspense>
              <ATSPage />
            </Suspense>
          ),
        },
        {
          path: "/:jobtitle/apply/:jobid",
          element: (
            <Suspense>
              <Apply />
            </Suspense>
          ),
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
