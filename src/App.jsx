import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <WelcomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
