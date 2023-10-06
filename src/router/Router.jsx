import React from "react";
import Home from "../Ui/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../Ui/pages/Error-404/Error404";
import HeaderCom from "../Ui/components/Header/HeaderCom";
import FooterCom from "../Ui/components/FooterCom";
import Kids from "../Ui/pages/Kids";
import Men from "../Ui/pages/Men";
import Women from "../Ui/pages/Women";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";

export default function Router() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<LoginForm />} /> */}
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <FooterCom />
        </BrowserRouter>
      </Provider>
    </>
  );
}
