import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import WelcomePage from "./pages/WelcomePage";
import NosAteliersPage from "./pages/NosAteliersPage";
import NosEvenementsPage from "./pages/NosEvenementsPage";
import PedagogiePage from "./pages/PedagogiePage";
import QuiSommeNousPage from "./pages/QuiSommeNousPage";
import FaireUnDonPage from "./pages/FaireUnDon";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "/nos-ateliers", element: <NosAteliersPage /> },
      { path: "/nos-evenements", element: <NosEvenementsPage /> },
      { path: "/pedagogie", element: <PedagogiePage /> },
      { path: "/qui-somme-nous", element: <QuiSommeNousPage /> },
      { path: "/faire-un-don", element: <FaireUnDonPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
