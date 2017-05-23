
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
      if( nextBodyHeight!==bodyHeight ) {
      c.setState({
        bodyHeight: ratio.height,
        bodyWidth: ratio.width,
      });
    }
  }

  static fixEmbedRatio(c, args = {}) {
    const {
      width,
      height
    } = args;
    let minScreen = 1060;
    let sidebar   = __.SIDEBAR_WITH;
    let padding   = __.PADDING_WITH;
    if (!hasSidebar) {
      sidebar = 0;
    }
    if (width <= minScreen) {
      padding = (__.PADDING_WITH/2.5)
    }
    let minHeight = 500;
    let nextBodyWidth = minWidth - sidebar - padding;
    let nextBodyHeight 
    = SocialPostHelpers.getHeight(c, SP_BODY_CONTENT);
    if (nextBodyHeight === 0) {
      nextBodyHeight = minHeight;
    }
    if( nextBodyHeight!==bodyHeight ) {
      c.setState({
        bodyHeight: nextBodyHeight,
        bodyWidth: nextBodyWidth
      });
    }
  }




/*
  static refreshBodyHeight (c, width, height, ratio = null) {
    const {
      type,
      bodyHeight
    } = c.state;
    let minHeight = 500;
    let nextBodyHeight 
    = SocialPostHelpers.getHeight(c, SP_BODY_CONTENT);
    if (nextBodyHeight === 0) {
      nextBodyHeight = minHeight;
    }
    if (type === __.TYPE_IMAGE) {
      minHeight = 500;
      if (minHeight >= height) {
        if (height > 300) {
          minHeight = height - 100;
        }
      }
      /*
      if (ratio!==null) {
        console.log("H RESIZE")
        console.log(ratio.height, minHeight, ratio.height <= minHeight)  
      }
      *
      if (ratio!==null 
        && (ratio.height <= minHeight)) {
        nextBodyHeight = minHeight;
      }
    }

    switch(type) {
      case __.TYPE_IMAGE:

        break;
      
      case __.TYPE_VIDEO:
      case __.TYPE_EMBED:
      case __.TYPE_GALLERY:
      case __.TYPE_ARTICLE:
      case __.TYPE_CUSTOM:
      default:

        break;
    }

    if( nextBodyHeight!==bodyHeight ) {
      c.setState({
        bodyHeight: nextBodyHeight,
      });
    }
  }

  static refreshBodyWidth (c, width, height, ratio = null) {
    const {
      type,
      isMobile,
      bodyWidth,
      hasSidebar
    } = c.state;

    let minWidth = width;
    let sidebar = __.SIDEBAR_WITH;
    let padding = __.PADDING_WITH;
    let nextBodyWidth = 0;
    let imgWidthFull = false;

    if (isMobile) {
      sidebar = 0;
      padding = 0;
    }
    if (!hasSidebar) {
      sidebar = 0;
    }
    if (width <= 1060) {
      console.log("width <= 1060", width)
      minWidth = 1060;
      padding =  (__.PADDING_WITH/2.5)
    }

    switch(type) {
      
      case __.TYPE_VIDEO:
        nextBodyWidth = 0;
        break;
      
      case __.TYPE_EMBED:
        nextBodyWidth = minWidth - sidebar - padding;
        break;
      
      case __.TYPE_GALLERY:
        nextBodyWidth = 0;
        break;
      
      case __.TYPE_ARTICLE:
      case __.TYPE_CUSTOM:
      default:
        nextBodyWidth = 0;
        break;
    }

    if (nextBodyWidth === 0 
      || ratio === null) {
      nextBodyWidth = 700;
    }

    console.error(imgWidthFull) 

    if(nextBodyWidth!==bodyWidth) {
      c.setState({
        bodyWidth: nextBodyWidth,
        imgWidthFull
      });
    }
  }
*/

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