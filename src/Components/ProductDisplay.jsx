import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { Typography, Stack } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductDisplay = ({ category }) => {
  const { productList } = useContext(StoreContext);
  return (
    <Stack>
      <Typography sx={{ fontSize: "28px" }}>Top Clothes near you</Typography>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        {productList.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

export default ProductDisplay;
