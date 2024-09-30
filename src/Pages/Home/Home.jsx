import React, { useState } from "react";
import { Typography, Stack } from "@mui/material";
import { dummyData } from "../../../DummyData/dummydata";
import ExploreProducts from "../ExploreProducts/ExploreProducts";
import ProductDisplay from "../../Components/ProductDisplay";

const Home = () => {

  const [category, setCategory] = useState('All')
  console.log(category)

  return (
    <Stack sx={{display : 'flex', flexDirection : 'column', gap : '50px'}}>
      <ExploreProducts category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
    </Stack>
  );
};

export default Home;
