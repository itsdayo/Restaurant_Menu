import React from "react";
import { render } from "react-dom";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // myInput = React.createRef();
  goToStore = event => {
    event.preventDefault();
    console.log(this.myInput.value);
    const storeName = this.myInput.value;

    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          ref={myInput => (this.myInput = myInput)}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
export default StorePicker;
