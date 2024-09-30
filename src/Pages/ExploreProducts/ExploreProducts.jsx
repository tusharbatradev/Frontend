import { Stack, Typography } from "@mui/material";
import React from "react";
import { dummyData } from "../../../DummyData/dummydata";

const ExploreProducts = ({ category, setCategory }) => {
  return (
    <Stack>
      <Typography sx={{ fontSize: "28px", fontFamily: "Poppins" }}>
        Explore Our Products:-
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {dummyData.map((item) => (
          <Stack
            onClick={() =>
              setCategory((prev) =>
                prev === item.category ? "All" : item.category
              )
            }
            sx={{
              width: "295px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            key={item.id}
          >
            <img
              src={item.img}
              alt="category"
              style={{
                height: "300px",
                maxHeight: "300px",
                width: "300px",
                maxWidth: "300px",
                border:
                  category === item.category
                    ? "3px solid red"
                    : "1px solid gray",
              }}
            />
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "Poppins",
              }}
            >
              {item.category}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ExploreProducts;
