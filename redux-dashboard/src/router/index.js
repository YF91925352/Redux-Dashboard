import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/auth-route";
import { Article, Home, HomeLayout, Login, Publish } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <HomeLayout />
      </AuthRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/article", element: <Article /> },
      { path: "/publish", element: <Publish /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);
