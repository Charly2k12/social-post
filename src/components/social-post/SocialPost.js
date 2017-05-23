
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as __ from "../../constant";
import Utils from "../../lib/utils";
import { 
  isFunction 
} from "../../lib/utils/Lodash";

// UI COMPONENTS
import Col from "../ui/Col";
import Clear from "../ui/Clear";
import Icon from "../ui/Icon";
import Action from "../ui/Action";
import VideoEmbed from "../ui/VideoEmbed";

// HELPERS
import SocialPostHelpers from "./SocialPostHelpers";
import classes from "./classes";
import {
  SP_BODY_CONTENT
} from "./refs";

// CHILD COMPONENTS
import SocialPostBody from "./SocialPostBody";
import SocialPostSideBar from "./SocialPostSideBar";
import SocialPostContent from "./SocialPostContent";

const bodyActions = [{
  icon:"thumbs-up",
  label:"Like",
  onClick: () => console.error("Like...")
},{
  icon:"location",
  label:"Share",
  onClick: () => console.error("Share...")
},{
  icon:"comment-square",
  label:"Comment",
  onClick: () => console.error("Comment...")
},{
  icon:"mail",
  label:"Contact",
  onClick: () => console.error("Contact...")
},{
  icon:"download",
  label:"Download",
  onClick: () => console.error("Contact...")
}];

// ------------------- //
  // SOCIAL POST ------------------- //
// ------------------- //

class SocialPost extends Component {
  constructor(props) {
    super(props);
    const {
      name = ""
    } = props;
    this.name = name || 'SocialPost';
    this.state = {

      hash: null,

      bodyHeight: 500,
      bodyWidth: 700,

      height: 0,
      width: 0,
      prevEl: null,
      breakpoint: "",
      classNames: "",

      hasSidebar: true,
      hasHeader: true,
      hasFooter: true,
      hasNavigation: true,
      hasFullScreen: true,

      isFullScreen: false,
      isMobile: false,

      title: "Backstage avec <strong>Mélissa Rodriguez</strong> photo prise par Tran Dac-Phat et Emmanuel Petit",
      counter: "1/6",
      
      imgWidthFull: false,
      imgSrc: "http://lorempixel.com/700/800/sports",
      videoSrc: "https://www.youtube.com/embed/z_aC5xPQ2f4?ecver=2",


      type: __.TYPE_IMAGE,
      //type: __.TYPE_EMBED,

    } 
  }

  render () {
    const {
      breakpoint,
      classNames,
      bodyHeight,
    } = this.state;
    return (
      <social-post>
        {this.getOverlay()}
        <div className={`${breakpoint} ${classes.wrapper} ${classNames}`}>
          <div className={`${classes.container}`}>
            {this.getButtonClose()}
            <div ref={this.name}
            className={`${classes.content}`}
            style={{height:`${bodyHeight}px`}}>
              <SocialPostBody 
              parent={this}
              actions={bodyActions}
              {...this.state}>
                <SocialPostContent
                ref={SP_BODY_CONTENT}
                parent={this}
                {...this.state}
                />
              </SocialPostBody>
              <SocialPostSideBar 
              parent={this}
              {...this.state}>
                <div className="dv"/><Clear/>
                <div className="dv"/><Clear/>
                <div className="dv"/><Clear/>
                <div className="dv"/><Clear/>
                <div className="dv"/><Clear/>
                <div className="dv"/><Clear/>
                <div className="dv"/><Clear/>
                <div className="dv"/>
              </SocialPostSideBar>
              <Clear/>
            </div>
          </div>
        </div>
      </social-post>
    )
  }
/*
<div className={`${classes.body.content} ${this.getClassName()}`}>
</div> 
*/
  getOverlay() {
    const {
      overlayColor = "rgba(0, 0, 0, .9)"
    } = this.props;
    return (
      <div className={`${classes.overlay}`} 
      style={{backgroundColor: overlayColor}}
      />
    )
  }

  getButtonClose() {
    return (
      <Icon 
      icon={classes.icon.close} 
      className={`${classes.btn.close}`}
      onClick={() => this.onClose()}
      />
    )
  }

  // ------------------- //
    // EVENTS ------------------- //
  // ------------------- //

  onUpdate() {
    console.error("UPDATE...");
  }

  onClose() {
    console.error("CLOSE...");
  }

  onToggleClass(str) {
    const {
      classNames = ""
    } = this.state;
    let nextValue = "";
    if (classNames.includes(str)) {
      nextValue = classNames.replace(str,'');
    } else {
      nextValue = `${classNames} ${str}`; 
    }
    this.setState({
      classNames: nextValue.trim()
    });
  }

  onToggleFullScreen() {
    const {
      isFullScreen
    } = this.state;
    this.onToggleClass(classes.status.fullscreen);
    this.setState({
      isFullScreen: !isFullScreen
    })
  }

  // ------------------- //
    // COMPONENT LIFECYCLE ------------------- //
  // ------------------- //

  componentWillMount () {
    //this.refreshSize();
    SocialPostHelpers.setConfigByType(this);
    Utils.eventListner.add("resize", () => this.refreshSize());
    Utils.eventListner.add("click", (e) => this.onFocusEvent(e));
  }

  componentDidMount () {
    this.refreshSize();
  }

  componentWillUnmount () {
    //this.refreshSize = () => false;
    Utils.eventListner.remove("resize", () => this.refreshSize());
    Utils.eventListner.add("click", (e) => this.onFocusEvent(e));
  }

  componentDidUpdate () {
    //SocialPostHelpers.refreshBodyHeight(this);
  }

  // ------------------- //
    // UTILS ------------------- //
  // ------------------- //

  refreshSize(el = null) {
    SocialPostHelpers.refreshSize(this, el);
  }

  // FOCUS SUPPORT ------------------- //

  onFocusEvent(evt) {
    const ref = this.refs[this.name];
    const area = ReactDOM.findDOMNode(ref);
    if (area && !area.contains(evt.target)) {
      this.onClose()
    }
  }
}

// ------------------- //
export default SocialPost;
// ------------------- //