import React, { Component } from "react";
import { connect } from "react-redux";

// import AddStoreFormContainer from "../Forms/AddStore/AddStoreFormContainer";
import { uploadImage } from "../../store/image/actions";
// import { fetchStores } from "../../store/store/actions";
// import { findProduct } from "../../store/product/actions";

export class UserPageContainer extends Component {
  state = {
    selectedFile: null
  };

  componentDidMount() {
    // const id = this.props.match.params.id;
    // this.props.findProduct(key);
    // console.log(id);
  }

  handleSelect = event => {
    // this.setState({
    //   selectedFile: event.target.files[0]
    // });
    event.target.files[0] &&
      event.target.files[0].name &&
      this.props.uploadImage(event.target.files[0], event.target.files[0].name);
    // console.log("target", event.target.files[0]);
  };

  // handleUpload = () => {
  //   this.props.uploadImage(
  //     this.state.selectedFile,
  //     this.state.selectedFile.name
  //   );
  // };

  render() {
    const user = this.props.user;
    return (
      <div>
        user page
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>city</p>
        <p>{user.favorite_products}</p>
        <p>{user.favorite_stores}</p>
        <div>
          <input type="file" onChange={this.handleSelect} />
          {/* <button onClick={this.handleUpload}>Upload</button> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // product: state.products,
    user: state.session.user,
    token: state.session.jwt
  };
}

export default connect(mapStateToProps, { uploadImage })(UserPageContainer);
