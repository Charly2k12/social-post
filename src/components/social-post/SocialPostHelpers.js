
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import * as __ from "../../constant";
import { 
  isFunction 
} from "../../lib/utils/Lodash";
import {
  SP_BODY_CONTENT
} from "./refs";

// ------------------- //
  // SOCIAL POST HELPERS ------------------- //
// ------------------- //

class SocialPostHelpers {

  static getHeight (c, refId) {
    let node = ReactDOM.findDOMNode(c.refs[refId]) ;
    if(!node) return 0;
    return node.offsetHeight ;
  }

  static getWidth (c, refId) {
    let node = ReactDOM.findDOMNode(c.refs[refId]) ;
    if(!node) return 0;
    return node.offsetWidth ;
  }

  static refreshSize(c, el = null) {
    const {
      type,
      prevEl,
      isMobile,
      bodyWidth,
      hasSidebar
    } = c.state;
    const {
      height,
      width
    } = Utils.screen.getSize();
    c.setState({
      height: height,
      width: width,
      isMobile: Utils.mobile.is(),
      breakpoint: Utils.screen.getBreakPoint("sp")
    });
    if (!isMobile) {
      switch(type) {
        case __.TYPE_IMAGE:
          SocialPostHelpers.fixImgRatio(c, {
            el, prevEl, height, width
          });
          break;
        
        case __.TYPE_EMBED:
          SocialPostHelpers.fixEmbedRatio(c, {
            el, prevEl, height, width
          });
          break;
          
        case __.TYPE_VIDEO:
        case __.TYPE_GALLERY:
        case __.TYPE_ARTICLE:
        case __.TYPE_CUSTOM:
        default:

          break;
      }
    }
  }

  static fixImgRatio(c, args = {}) {
    const {
      isMobile,
      bodyWidth,
      hasSidebar
    } = c.state;
    const {
      el,
      prevEl,
      height,
      width
    } = args;
    let handle = null;
    if (el) {
      handle = el;
      c.setState({
        prevEl:el
      })
    } 
    else if (prevEl){
      handle = prevEl;
    }
    if (handle) {
      let minScreen = 1060;
      let minWidth  = 400;
      let minHeight = 400;
      let ratio     = handle;
      let sidebar   = __.SIDEBAR_WITH;
      let padding   = __.PADDING_WITH;
      let srcWidth  = handle.width;
      let scrHeight = handle.height;
      if (!hasSidebar) {
        sidebar = 0;
      }
      if (width <= minScreen) {
        padding = (__.PADDING_WITH/2.5)
      }
      ratio = Utils.screen.calculateAspectRatioFit(
        srcWidth, 
        scrHeight, 
        (width - sidebar - padding), 
        (height - padding)
      );
      if (ratio.width <= minWidth) {
        ratio.width = minWidth;
      }
      if (ratio.height <= minHeight) {
        ratio.height = minHeight;
      }
      c.setState({
        bodyHeight: ratio.height,
        bodyWidth: ratio.width
      });
    }
  }

  static fixEmbedRatio(c, args = {}) {
    const {
      isMobile,
      hasSidebar
    } = c.state;
    const {
      el,
      width,
      height
    } = args;
    let minScreen = 1060;
    let minHeight = 400;
    let minWidth = width;
    let sidebar   = __.SIDEBAR_WITH;
    let padding   = __.PADDING_WITH;
    let nextBodyWidth = width - sidebar - (padding*1.5);
    let nextBodyHeight 
    = SocialPostHelpers.getHeight(c, SP_BODY_CONTENT);
    if (!hasSidebar) {
      sidebar = 0;
    }
    if (width <= minScreen) {
      minWidth = minScreen;
      padding = (__.PADDING_WITH/2.5);
      nextBodyWidth = minWidth - sidebar - padding;
    }
    if (nextBodyHeight === 0) {
      nextBodyHeight = minHeight;
    } 
    c.setState({
      bodyHeight: nextBodyHeight,
      bodyWidth: nextBodyWidth
    });
  }

  static setConfigByType(c) {

    const {
      type,
      isMobile,
      bodyWidth,
      hasSidebar
    } = c.state;

    let config = {};

    switch(type) {
      
      case __.TYPE_IMAGE:
        config = {
          hasSidebar: true,
          hasHeader: true,
          hasFooter: true,
          hasNavigation: true,
          hasFullScreen: true,
        }
        break;
      
      case __.TYPE_VIDEO:

        break;
      
      case __.TYPE_EMBED:
        config = {
          hasSidebar: true,
          hasHeader: true,
          hasFooter: false,
          hasNavigation: true,
          hasFullScreen: true,
        }
        break;
      
      case __.TYPE_GALLERY:

        break;
      
      case __.TYPE_ARTICLE:
      case __.TYPE_CUSTOM:
      default:
        config = {
          hasSidebar: true,
          hasHeader: false,
          hasFooter: false,
          hasNavigation: false,
          hasFullScreen: false,
        }
        break;
    }

    c.setState({...config});
  }
}

// ------------------- //
export default SocialPostHelpers;
// ------------------- //