import { useState } from "react";
import BookCatalogPage from "./components/BookCatalogPage";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import userSlice from "./slices/userSlice";
import RouterComp from "./components/RouterComp";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Profile from "./components/Profile";

function App() {
  const store = configureStore({
    reducer: {
      user: userSlice,
    },
  });

  return (
    <Provider store={store}>
      <div className="bg-richBlue-100 flex flex-row px-10 h-screen">
        <RouterProvider router={appRouter}>
          <RouterComp />
        </RouterProvider>
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RouterComp />,
    children: [
      { path: "/", element: <Home /> },
      { path: "books", element: <BookCatalogPage /> },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default App;
