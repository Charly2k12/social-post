import React, {Component} from 'react';
import {
  isFunction
} from "../lib/utils/Lodash"

// ------------------- //
  // VIDEO EMBED ------------------- //
// ------------------- //

let classes = {
  wrapper   : "embed-responsive embed-responsive-16by9",
  frame    : "embed-responsive-item"
};

class VideoEmbed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: false
    }
  }

  render () {
    const {
      src="", 
      className="", 
      style={},
      visible=true
    } = this.props;
    const {
      isLoad
    } = this.state;
    if (!visible||!src) {
      return false;
    } else {
      return (
        <div className={`${className} ${classes.wrapper}`}> 
          <iframe 
          src={src}
          className={classes.frame}
          onLoad={() => {
            this.setState({
              isLoad: true
            })
          }}
          /> 
        </div>
      )
    }
  }
}

// ------------------- //
export default VideoEmbed;
// ------------------- //
