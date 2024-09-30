import React from "react";
import LOGO from "../assets/WEARNGO-LOGO.png";
import { Button, Stack, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <img
        src={LOGO}
        alt="Logo"
        srcSet=""
        style={{
          width: "150px",
          height: "30px",
        }}
      />
      <Stack direction={"row"} spacing={8}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
          HOME
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
          Contact-us
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
          Our Products
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <LocalMallIcon sx={{cursor : 'pointer'}} />
        <SearchIcon sx={{cursor : 'pointer'}} />
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          variant="contained"
        >
          Sign In
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
