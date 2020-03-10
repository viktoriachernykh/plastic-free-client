import React from "react";
import { Link } from "react-router-dom";

export default function StoresList(props) {
  // const [page, setPage] = useState(false);
  console.log("props", props);

  return (
    <div>
      <h2>all stores</h2>
      {props.stores.map((store, index) => (
        <Link to={`/store/${store.id}`} key={index}>
          <p>{store.name}</p>
        </Link>
      ))}
    </div>
  );
}
