import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Navigation from "./pages/Navigation";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
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
      <ToastContainer autoClose={1200} hideProgressBar position="top-center" />
    </BrowserRouter>
  );
}

export default App;
