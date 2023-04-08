import React from "react";
import ListProduct from "../../components/ListProduct";
import { PRODUcT } from "../../mock/data";

const Home = () => {
  return (
    <div>
      <ListProduct data={PRODUcT} />
    </div>
  );
};

export default Home;
