import React from "react";

import Card from "./Card";
import Nav from "./Nav";
import data from "./data";

export default function App() {
  const card = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="app-wrapper">
      <Nav />
      {card}
    </div>
  );
}
