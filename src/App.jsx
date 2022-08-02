import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./pages/Error";
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Women from "./pages/Women";
import Men from "./pages/Men";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer autoClose={5000} position="top-center" />
    </BrowserRouter>
  );
}

export default App;
