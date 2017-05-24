import React, {Component} from 'react';

// UI COMPONENTS
import Col from "../ui/Col";
import Clear from "../ui/Clear";
import Icon from "../ui/Icon";
import Action from "../ui/Action";
import VideoEmbed from "../ui/VideoEmbed";

// HELPERS
import classes from "./classes";

// ------------------- //
  // SOCIAL POST BODY ------------------- //
// ------------------- //

class SocialPostBody extends Component {
  render () {
    const {
      parent,
      children
    } = this.props;
    return(
      <div className={`${classes.body.is}`}
      style={this.getStyle()}
      onMouseEnter={() => parent.onToggleClass(classes.body.hover)}
      onMouseLeave={() => parent.onToggleClass(classes.body.hover)}
      >
        <div className={`${classes.body.header}`}>
          {this.getTitle()} 
          {this.getScreenControl()}
        </div>
        {this.getButtonPrev()}
        {this.getButtonNext()}
        {children}
        {this.getFooter()}
      </div>
    )
  }

  getStyle() {
    const {
      parent,
      children,
      bodyHeight,
      bodyWidth,
      hasSideBar
    } = this.props;
    let style = {};
    style['width'] = `${bodyWidth}px`;
    style['height'] = `${bodyHeight}px`;
    style['lineHeight'] = `${bodyHeight}px`;
    return style;
  }

  getTitle() {
    const {
      title = "",
    } = this.props;
    return (
      <span className={`${classes.el.title}`}>
        <span dangerouslySetInnerHTML={{__html:title}}/>
        {this.getCounter()}
      </span>
    )
  }

  getCounter() {
    const {
      counter = 0,
    } = this.props;
    if (!counter) {
      return false;
    } else {
      return (
        <span className={`${classes.el.counter}`}>
          {counter}
        </span>
      )
    }
  }

  getFooter() {
    const {
      parent,
      hasFooter,
      actions = []
    } = this.props;
    if (!hasFooter) {
      return false;
    } else {
      return (
        <div className={`${classes.body.footer}`}>
          <div className={`${classes.el.actions}`}>
          { actions.map((a,i) => <Action key={i} {...a}/>)}
          </div>   
        </div>
      )
    }
  }

  getScreenControl() {
    const {
      parent,
      hasFullScreen,
      isFullScreen,
    } = this.props;
    if (!hasFullScreen) {
      return false;
    } else if (!isFullScreen) {
      return (
        <Icon 
        icon={classes.icon.maximize} 
        className={`${classes.btn.maximize}`}
        onClick={() => parent.onToggleFullScreen()}
        />
      )
    } else {
      return (
        <Icon 
        icon={classes.icon.minimize} 
        className={`${classes.btn.minimize}`}
        onClick={() => parent.onToggleFullScreen()}
        />
      )
    }
  }

  getButtonPrev() {
    const {
      parent,
      hasNavigation
    } = this.props;
    if (!hasNavigation) {
      return false;
    } else {
      return (
        <Icon 
        icon={classes.icon.prev} 
        className={`${classes.btn.prev}`}
        onClick={() => console.error("PREV...")}
        />
      )
    }
  }

  getButtonNext() {
    const {
      parent,
      hasNavigation
    } = this.props;
    if (!hasNavigation) {
      return false;
    } else {
      return (
        <Icon 
        icon={classes.icon.next} 
        className={`${classes.btn.next}`}
        onClick={() => console.error("NEXT...")}
        />
      )
    }
  }


}

// ------------------- //
export default SocialPostBody;
// ------------------- //