import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import PlacesAutocomplete from "react-places-autocomplete";

export default function SearchPlaceInput(props) {
  // const dispatch = useDispatch();
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    props.addStore(address);
    setAddress("");
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      shouldFetchSuggestions={address.length > 3}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: "Search Places ...",
            })}
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
              };
              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  <span>{suggestion.description}</span>
                  <p>{suggestion.formattedSuggestion.mainText}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

// export default class SearchPlaceInput extends React.Component {
//   state = {
//     address: ""
//   };

//   handleChange = address => {
//     this.setState({ address: address });
//   };

//   handleSelect = address => {
//     this.props.addStore(address);
//     this.setState({ address: "" });
//   };

//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//         shouldFetchSuggestions={this.state.address.length > 3}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: "Search Places ..."
//               })}
//             />
//             <div>
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const style = {
//                   backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
//                 };
//                 return (
//                   <div {...getSuggestionItemProps(suggestion, { style })}>
//                     <span>{suggestion.description}</span>
//                     <p>{suggestion.formattedSuggestion.mainText}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }
