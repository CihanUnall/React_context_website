import "./App.scss";

import { Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/UserContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

import UserForm from "./components/UserForm.jsx";
import Display from "./components/Display.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./pages/Nav.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Korumalı rotalar */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/product"
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
