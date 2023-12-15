import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../Ui/pages/Error-404/Error404";
import Home from "../Ui/pages/Home/Home";
import HeaderCom from "../Ui/components/Header/HeaderCom";
import FooterCom from "../Ui/components/FooterCom";
import Kids from "../Ui/pages/Kids";
import Men from "../Ui/pages/Men";
import Women from "../Ui/pages/Women";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import About from "../Ui/pages/About";
import Contact from "../Ui/pages/Contact";
import LoginForm from "../Ui/pages/Login";
import Dashboard from "../Ui/pages/Admin/Dashboard/Dashboard";
import ProductCom from "../Ui/pages/Admin/Product/ProductCom";
import Profile from "../Ui/pages/Profile/profile";
import ProductPage from "../Ui/pages/ProductPage/ProductPage";
import SignUp from "../Ui/pages/Signup/SignUp";
import UserList from "../Ui/pages/Admin/User/UserList";
import Orders from "../Ui/pages/Admin/Order/Orders";
import { AuthRoute, AdminAuth } from "./AuthRoute";

export default function Router() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            {/* ----------- Public -------------- */}

            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productpage" element={<ProductPage />} />

            {/* ----------- Auth -------------- */}

            <Route
              path="/profile"
              element={<AuthRoute component={<Profile />} />}
            />

            {/* ----------- Admin -------------- */}

            <Route
              path="/admin/products"
              element={<AdminAuth component={<ProductCom />} />}
            />
            <Route
              path="/orders"
              element={<AdminAuth component={<Orders />} />}
            />
            <Route
              path="/user"
              element={<AdminAuth component={<UserList />} />}
            />
            <Route
              path="/admin/dashboard"
              element={<AdminAuth component={<Dashboard />} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <FooterCom />
        </BrowserRouter>
      </Provider>
    </>
  );
}
