import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/auth-route";
import { HomeLayout, Login } from "@/pages";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("@/pages/home"));
const Article = lazy(() => import("@/pages/article"));
const Publish = lazy(() => import("@/pages/publish"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <HomeLayout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={"loading"}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/article",
        element: (
          <Suspense fallback={"loading"}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "/publish",
        element: (
          <Suspense fallback={"loading"}>
            <Publish />
          </Suspense>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);
