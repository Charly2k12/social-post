import React, {Component} from 'react';
import classes from "./classes";
import ScrollBar from "../ui/ScrollBar";

// ------------------- //
  // SOCIAL POST SIDEBAR ------------------- //
// ------------------- //

class SocialPostSideBar extends Component {
  render () {
    const {
      parent,
      children,
      bodyHeight,
      hasSidebar,
    } = this.props;
    if (!hasSidebar) {
      return false;
    } else {
      return (
        <div className={`${classes.sidebar.is}`}>
          <ScrollBar
          style={{ 
            width:"100%",
            height: bodyHeight
          }}
          className={`${classes.sidebar.srollbar}`}>
            {children}
          </ScrollBar>
        </div>
      )
    }
  }
}

// ------------------- //
export default SocialPostSideBar;
// ------------------- //