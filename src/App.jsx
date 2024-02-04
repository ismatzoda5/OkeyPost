import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UserById from "./pages/UserById";
import Users from "./pages/Users";
import About1 from "./pages/About1";
import About2 from "./pages/About2";
import About3 from "./pages/About3";
import About4 from "./pages/About4";
import About5 from "./pages/About5";
import About6 from "./pages/About6";


function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
         {
          path: "/about1",
          element:<About1/>,
        },
         {
          path: "/about2",
          element:<About2/>,
        },
         {
          path: "/about3",
          element:<About3/>,
        },
         {
          path: "/about4",
          element:<About4/>,
        },
         {
          path: "/about5",
          element:<About5/>,
        },
        
         {
          path: "/about6",
          element:<About6/>,
        },
        
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />;
     
      

    </>
  );
}
export default App;
