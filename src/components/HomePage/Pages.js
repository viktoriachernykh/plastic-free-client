// import React, { Component } from "react";

// export default class Pages extends Component {
//   state = {
//     pageNumber: 1
//   };

//   prevPage = () => {
//     if (this.state.pageNumber > 1)
//       this.setState({ pageNumber: this.state.pageNumber - 1 });
//     this.props.setPage(this.state.pageNumber);
//   };

//   nextPage = () => {
//     this.setState({ pageNumber: this.state.pageNumber + 1 });
//     this.props.setPage(this.state.pageNumber);
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.prevPage}>prev</button>
//         <b>{this.state.pageNumber}</b>
//         <button onClick={this.nextPage}>next</button>
//       </div>
//     );
//   }
// }
