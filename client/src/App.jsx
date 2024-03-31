import { useState } from "react";
import BookCatalogPage from "./components/BookCatalogPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-richBlue-100 flex flex-row px-10 h-screen">
      <NavBar />
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <BookCatalogPage />,
  },
]);

export default App;
