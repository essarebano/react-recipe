import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  errorElement: <NotFound />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/recipes',
      element: <Recipes />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]
}])