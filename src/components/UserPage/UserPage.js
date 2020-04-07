import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { uploadImage } from "../../store/image/actions";

const selectUser = (reduxState) => {
  return reduxState.session.user;
};

export default function UserPageContainer() {
  const [file, selectFile] = useState(null);

  const user = useSelector(selectUser);

  // const handleSelect = (event) => {
  //   event.target.files[0] &&
  //     event.target.files[0].name &&
  //     dispatch(uploadImage(event.target.files[0], event.target.files[0].name));
  // };
  // const handleUpload = () => {
  //   uploadImage(
  //     file,
  //     file.name
  //   );
  // };

  return (
    <div>
      user page
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>city</p>
      <p>{user.favorite_products}</p>
      <p>{user.favorite_stores}</p>
      <div>
        {/* <input type="file" onChange={handleSelect} /> */}
        {/* <button onClick={handleUpload}>Upload</button> */}
      </div>
    </div>
  );
}
