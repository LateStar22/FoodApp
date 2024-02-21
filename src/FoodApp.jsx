import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/Restaurantmenu";
import userContext from "./utils/userContext";
import { useState, useEffect } from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import LoginSignup from "./Components/LoginSignup";
// import Grocery from "./Components/grocery";

// Body Component:
const AppLayout = () => {
  const [userName, setuserName] = useState(null);

  useEffect(() => {
    const data = {
      name: "Ravi Shukla",
    };
    setuserName(data.name);
  }, [])
  //here we have wrapped whole app under provider so context value will be available for all components. IF we would have wrapped only header then value={{loggedInUser : userName}} would have been available for header only. All other components would have has Default value 
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div className="app">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./Components/grocery")) // doing lazy loading


// Creating Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery></Grocery></Suspense>,
      },
      {
        path: "/restaurantmenu/:restaurantId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/Cart",
        element : <Cart></Cart>
      },
      {
        path : "/LoginSignup",
        element : <LoginSignup></LoginSignup>
      }
    ],
    errorElement: <Error></Error>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />);

