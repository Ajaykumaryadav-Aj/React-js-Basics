import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";
import ParamCom from "./component/ParamCom";
import Courses from "./component/Courses";
import MockTest from "./component/MockTest";
import Reports from "./component/Reports";
import NotFound from "./component/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar /> <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About /> <Navbar />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard /> <Navbar />
      </div>
    ),

    children: [
      { path: "courses", element: <Courses /> },
      { path: "Mock-tests", element: <MockTest /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <ParamCom /> <Navbar />
      </div>
    ),
  },
  {
    path:'*',
    element: <NotFound/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
