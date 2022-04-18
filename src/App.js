import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home/Home";
import "./App.css";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        />
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail title="Service Detail" />}
        />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }
          title="About"
        />
        <Route path="/login" element={<Login />} title="Login" />
        <Route path="/register" element={<Register />} title="Register" />
        <Route
          path="/checkout"
          title="Checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound title="Page not found" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
