import React from "react";
import data from "../data";
import Card from "../Component/Card";
import Navbar from "../Component/Navbar";
function Home() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <h1 className="tag">POPULAR</h1>
      <div className="home-cards">{cards}</div>
    </div>
  );
}

export default Home;
