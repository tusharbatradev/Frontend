import React from "react";
import Navbar from "./Components/Navbar";
import { Container, Stack } from "@mui/material";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

const App = () => {
  return (
    <Stack
      sx={{
        padding: "12px",
        display : 'flex',
        flexDirection : 'column',
        gap : '18px'
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </Stack>
  );
};

export default App;
