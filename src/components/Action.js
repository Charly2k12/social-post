
import React, {Component} from 'react';
import Icon from "./Icon";
import {
  isFunction
} from "../lib/utils/Lodash";

// ------------------- //
  // WF ACTION ------------------- //
// ------------------- //

let classes = {
  wrapper   : "sp-action"
};

class Action extends Component {
  render () {
    const {
      icon="", 
      label="",
      className="", 
      style={},
      onClick=null, 
      visible=true, 
    } = this.props;
    if (!visible||!isFunction(onClick)) {
      return false;
    } else {
      return (
        <div 
        className={`${classes.wrapper} ${className}`}
        onClick={() => onClick()}>
          <Icon icon={icon}/> {label}
        </div>
      )
    }
  }
}

// ------------------- //
export default Action;
// ------------------- //