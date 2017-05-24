import React, {Component} from 'react';
import md5 from "md5";
import {
  isNumber,
  isFunction
} from "../../lib/utils/Lodash";

// ------------------- //
  // AVATAR ------------------- //
// ------------------- //

let classes = {
  wrapper   : "sp-avatar"
};

class Avatar extends Component {

  constructor(props) {
    super(props);
    this.img = null;
    this.state = {
      ready: false,
      id: null
    }
  }

  render () {
    const {
      link = null,
      className="", 
      visible=true
    } = this.props;
    if (!visible) {
      return false;
    } else {
      if (link) {
        return (
          <span className={`${classes.wrapper} ${className}`}>
            <a href={link}>
              {this.getImage()}
            </a>
          </span>
        )
      } else {
        return (
          <span className={`${classes.wrapper} ${className}`}>
            {this.getImage()}
          </span>
        )
      }
    }
  }

  getImage() {
    const {
      ready
    } = this.state;
    const {
      type = null, 
      style = {}
    } = this.props;
    return (
      <img 
      ref={c => this.img = c}
      src={this.getSrc({type})} 
      style={style}
      onLoad={this.handleImageLoaded.bind(this)}
      onError={this.handleImageErrored.bind(this)}
      className={`${classes.responsive} fade ${ready?"in":""}`}
      //height={ready?h:100}
      />
    )
  }

  getSrc(args = {}) {
    const { id } = this.state;
    const { size = 50 } = this.props;
    const { type = null } = args;
    switch (type) {
      default : return Avatar.getGravatar(id, size)
    }
  }

  handleImageLoaded() {
    this.setState({
      ready:true
    })
  }

  handleImageErrored() {
    this.setState({
      ready:true
    })
  }

  // SOCIAL HELPERS ------------------- //

  static getGravatar(hash = "", size = null) {
    let url = `https://www.gravatar.com/avatar/${hash}?d=mm`;
    if (size && isNumber(size)) {
      url += `&s=${size}`;
    }
    return url;
  }

  // COMPONENT LIFECYCLE ------------------- //

  componentWillMount () {
    const { 
      email = null 
    } = this.props;
    if (email) {
      this.setState({
        id: md5(email)
      })
    }
  }
}

// ------------------- //
export default Avatar;
// ------------------- //