import { useEffect, useState } from "react";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import { Route, Routes } from "react-router";
import ProductdetailPage from "./pages/ProductdetailPage";
import CartPages from "./pages/CartPages";
import NavBar from "./components/NavBar";
import { login } from "./adapters/authCalls";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userToken, setUserToken] = useState(null);
  const authenticateUser = async () => {
    try {
      const token = await login("ayushive.official@gmail.com", "123456");
      setUserToken(token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes className="routes">
        <Route path="/" element={<ProductPage userToken={userToken} />} />
        <Route
          path="/productPage/:id"
          element={<ProductdetailPage userToken={userToken} />}
        />
        <Route path="/cart" element={<CartPages userToken={userToken} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
