import React from "react";

export default function SearchResultsHeader({ product, window, setWindow }) {
  // const [window, setWindow] = useState("locations");
  return (
    <div className="view-options">
      {window === "locations" && (
        <div>
          {product && product.Store.length > 0 ? (
            <b onClick={() => setWindow("locations")} className="active">
              {product.Store.length} locations
            </b>
          ) : (
            <b onClick={() => setWindow("locations")} className="active">
              no locations
            </b>
          )}
          <b> | </b>
          <b onClick={() => setWindow("online")}>online stores</b>
        </div>
      )}
      {window === "online" && (
        <div>
          {product && product.Store.length > 0 ? (
            <b onClick={() => setWindow("locations")}>
              {product.Store.length} locations
            </b>
          ) : (
            <b onClick={() => setWindow("locations")}>no locations</b>
          )}
          <b> | </b>
          <b onClick={(e) => setWindow("online")} className="active">
            online stores
          </b>
        </div>
      )}
    </div>
  );
}
