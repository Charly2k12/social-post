import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {
  isFunction
} from "../../lib/utils/Lodash"

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
    this.frame = null;
    this.state = {
      ready: false
    }
  }

  render () {
    const {
      src="", 
      className="", 
      style={},
      visible=true,
    } = this.props;
    const {
      ready
    } = this.state;
    if (!visible||!src) {
      return false;
    } else {
      return (
        <div className={`${className} ${classes.wrapper}`}> 
          <iframe 
          src={src}
          ref={c => this.frame = c}
          className={`${classes.frame} fade ${ready?"in":""}`}
          onLoad={() => this.handleFrameLoaded()}
          /> 
        </div>
      )
    }
  }

  handleFrameLoaded () {
    const { 
      onReady = null 
    } = this.props; 
    let size = null;
    if (this.frame) {
      let node = ReactDOM.findDOMNode(this.frame) ;
      size = {
        height: !node?0:node.offsetHeight,
        width: !node?0:node.offsetWidth
      }
    }
    this.setState({
      ready: true
    });
    if (isFunction(onReady)) {
      onReady(size);
    }
  }
}

// ------------------- //
export default VideoEmbed;
// ------------------- //
