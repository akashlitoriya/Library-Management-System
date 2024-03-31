import { useState } from "react";
import BookCatalogPage from "./components/BookCatalogPage";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import RouterComp from "./components/RouterComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-richBlue-100 flex flex-row px-10 h-screen">
      <RouterProvider router={appRouter}>
        <RouterComp />
      </RouterProvider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RouterComp />,
    children: [
      { path: "/", element: <Home /> },
      { path: "books", element: <BookCatalogPage /> },
    ],
  },
]);

export default App;
