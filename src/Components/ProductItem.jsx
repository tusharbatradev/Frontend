import { IconButton, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { StoreContext } from "../Context/StoreContext";

const ProductItem = ({ id, name, price, img }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext) 

  return (
    <Stack sx={{ width: "300px", display : 'flex', gap : '12px' }}>
      <img
        style={{ height: "350px", maxHeight: "350px" }}
        src={img}
        alt="PRO IMAGE"
      />
      {!cartItems[id] ? (
        <IconButton onClick={() => addToCart(id)}>
          <AddIcon />
        </IconButton>
      ) : (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={'center'}>
          <IconButton
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "12px",
              ":hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            onClick={() => addToCart(id)}
          >
            <AddIcon />
          </IconButton>
          <Typography sx={{fontSize : '20px', fontFamily : 'Poppins'}}>{cartItems[id]}</Typography>
          <IconButton
            sx={{
              backgroundColor: "red",
              color: "white",
              padding: "12px",
              ":hover": {
                backgroundColor: "white",
                color: "red",
              },
            }}
            onClick={() => removeFromCart(id)}
          >
            <RemoveIcon />
          </IconButton>
        </Stack>
      )}

      <Typography sx={{ fontSize: "20px", fontFamily: "Poppins" }}>
        {name}
      </Typography>
      <Typography
        sx={{ fontSize: "20px", fontFamily: "Poppins", color: "red" }}
      >
        {price} /-
      </Typography>
    </Stack>
  );
};

export default ProductItem;
