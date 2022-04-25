import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "../src/Pages/Home/Home/Home";
import "./App.css";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Manage from "./Pages/Manage/Manage";
import Order from "./Pages/Order/Order";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail title="Service Detail" />}
        />
        <Route path="/about" element={<About></About>} title="About" />
        <Route path="/login" element={<Login />} title="Login" />
        <Route path="/register" element={<Register />} title="Register" />
        <Route
          path="/checkout/:serviceId"
          title="Checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        />
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage />
            </RequireAuth>
          }
        />
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound title="Page not found" />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
