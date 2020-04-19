import React, { useState } from "react";
import WindowSwitch from "./WindowSwitch";
import Locations from "./Locations";
import OnlineStores from "./OnlineStores";

export default function SearchResults({ product, dataNotFound }) {
  const [window, setWindow] = useState("locations");
  return (
    <div>
      <WindowSwitch window={window} setWindow={setWindow} product={product} />
      {window === "locations" && <Locations product={product} />}
      {window === "online" && <OnlineStores product={product} />}
    </div>
  );
}
