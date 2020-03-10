// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import AddProductFormContainer from "../Forms/AddProduct/AddProductFormContainer";

// export default function HomePage(props) {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <h2>all products</h2>
//       <p>
//         Found one more plastic-free product?
//         <button onClick={e => setToggle(!toggle)}>Add it!</button>
//       </p>
//       {toggle && <AddProductFormContainer />}
//       {props.products.length >= 1 ? (
//         <div>
//           {props.products.map((product, index) => (
//             <Link to={`/product/${product.id}`} key={index}>
//               <p>{product.name}</p>
//             </Link>
//           ))}
//           {/* <h2>all stores</h2>
//           {props.stores.map((store, index) => (
//             <Link to={`/store/${store.id}`} key={index}>
//               <p>{store.name}</p>
//             </Link>
//           ))} */}
//         </div>
//       ) : (
//         <div>
//           Product not found, you can add it
//           <AddProductFormContainer />
//         </div>
//       )}
//     </div>
//   );
// }
