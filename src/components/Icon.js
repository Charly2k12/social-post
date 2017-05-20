
import React, {Component} from 'react';
import {
  isFunction
} from "../lib/utils/Lodash";

// ------------------- //
  // WF ICON ------------------- //
// ------------------- //

let classes = {
  wrapper   : "sp-icon",
  prefix    : "sp-icon-"
};

class Icon extends Component {
  render () {
    const {
      icon="", 
      className="", 
      style={},
      onClick=null, 
      visible=true, 
    } = this.props;
    if (!visible||!icon) {
      return false;
    } else {
      return (
        <span 
        style={style}
        className={`${classes.wrapper} ${className} alias-${icon}`} 
        onClick={() => isFunction(onClick) ? onClick() : ""}
        ><span className={`${classes.prefix}${icon}`}/></span>
      )
    }
  }
}

// ------------------- //
export default Icon;
// ------------------- //