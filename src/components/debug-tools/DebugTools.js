
import React, {Component} from 'react';
import Col from "../ui/Col";
import Clear from "../ui/Clear";

// ------------------- //
  // DEBUG TOOLS ------------------- //
// ------------------- //

class DebugTools extends Component {

  render () {
    return (
      <debug-tools>
        {this.getScreenSize()}
      </debug-tools>
    )
  }

  getScreenSize() {
    return (
      <debug-screen-size>
        <div className="wrapper">
          <div className="visible-xs">XS</div>
          <div className="visible-sm">SM</div>
          <div className="visible-md">MD</div>
          <div className="visible-lg">LG</div>
        </div>
      </debug-screen-size>
    )
  }
}

// ------------------- //
export default DebugTools;
// ------------------- //



