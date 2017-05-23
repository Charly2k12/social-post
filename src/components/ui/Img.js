
import React, {Component} from 'react';
import { 
  uniqueId,
  isFunction
} from "../../lib/utils/Lodash";

// ------------------- //
  // WF IMG ------------------- //
// ------------------- //

let classes = {
  wrapper   : "sp-img",
  responsive  : "img-responsive"
}

const Group = {};

class Img extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueId();
    this.img = null;
    this.state = {
      ready: false
    }
  }
  render () {
    const { 
      src="", 
      className="", 
      height="", 
      style={} 
    } = this.props;
    const {
      ready
    } = this.state;
    if(!src) {
      return false;
    } else {
      let h = height;
      if(style.hasOwnProperty('maxHeight')) {
        h = style.maxHeight
      }
      return (
        <img 
        ref={c => this.img = c}
        src={src} 
        style={style}
        onLoad={this.handleImageLoaded.bind(this)}
        //onError={this.handleImageErrored.bind(this)}
        className={`${classes.wrapper} ${classes.responsive} ${className} fade ${ready?"in":""}`}
        height={ready?h:100}
        />
      )
    }
  }

  handleImageLoaded () {
    const { 
      groupId = null,
      onReady = null 
    } = this.props; 
    let size = null;
    if (this.img) {
      size = {
        height: this.img.height,
        width: this.img.width
      }
    }
    this.setState({
      ready: true
    })
    if (groupId) {
      delete Group[groupId][this.id];
      if (Object.keys(Group[groupId]).length === 0) {
        if (isFunction(onReady)) {
          setTimeout(() => onReady(size), 200);
        }
      }
    } else {
      if (isFunction(onReady)) {
        setTimeout(() => onReady(size), 100)
      }
    }
  }

  // COMPONENT LIFECYCLE ------------------- //

  componentWillMount () {
    const { groupId = null } = this.props;
    if (groupId) {
      if (!Group.hasOwnProperty(groupId)) {
        Group[groupId] = {};
      }
      Group[groupId][this.id] = "loading"
    }
  }
}

// ------------------- //
export default Img;
// ------------------- //
