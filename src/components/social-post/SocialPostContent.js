import React, {Component} from 'react';
import * as __ from "../../constant";
import Utils from "../../lib/utils";

// UI COMPONENTS
import Col from "../ui/Col";
import Clear from "../ui/Clear";
import Icon from "../ui/Icon";
import Action from "../ui/Action";

import Img from "../ui/Img";
import VideoEmbed from "../ui/VideoEmbed";

// HELPERS
import classes from "./classes";

// ------------------- //
  // SOCIAL POST CONTENT ------------------- //
// ------------------- //

class SocialPostContent extends Component {
  render() {
    return (
      <div 
      style={this.getStyle()}
      className={`${classes.body.content} ${this.getClassName()}`}>
        {this.getContent()}
      </div> 
    )
  }

  getImage() {
    const {
      parent,
      imgSrc,
      imgWidthFull = false
    } = this.props;
    if (!imgSrc) {
      return false;
    } else {
      let style = {};
      if (imgWidthFull) {
        style = {width: "100%"};
      }
      return (
        <Img src={imgSrc} 
        style={style}
        className={"center-block"}
        onReady={(size) => parent.refreshSize(size)}
        />
      )
    }
  }

  getGallery() {
    return false;
  }

  getVideo() {
    return false;
  }

  getVideoEmbed() {
    const {
      parent,
      videoSrc
    } = this.props;
    if (!videoSrc) {
      return false;
    } else {
      return (
        <VideoEmbed 
        src={videoSrc}
        onReady={(size) => parent.refreshSize(size)}
        />
      );
    }
  }

  getPost() {
    return false;
  }

  getContent() {
    const {
      type
    } = this.props;

    switch(type) {

      case __.TYPE_IMAGE:
        return this.getImage();

      case __.TYPE_VIDEO:
        return this.getVideo();

      case __.TYPE_EMBED:
        return this.getVideoEmbed();

      case __.TYPE_GALLERY:
        return this.getGallery();

      case __.TYPE_ARTICLE:
      case __.TYPE_CUSTOM:
      default:
        return this.getPost();
    }
  }

  getStyle() {
    const {
      type,
      bodyHeight
    } = this.props;

    switch(type) {

      case __.TYPE_IMAGE:
        return {
          height: `${bodyHeight}px`
        };

      case __.TYPE_VIDEO:
      case __.TYPE_EMBED:
      case __.TYPE_GALLERY:
      case __.TYPE_ARTICLE:
      case __.TYPE_CUSTOM:
      default:
        return {};
    }
  }

  getClassName() {
    const {
      type
    } = this.props;

    switch(type) {

      case __.TYPE_IMAGE:
        return classes.type.image;

      case __.TYPE_VIDEO:
        return classes.type.video;

      case __.TYPE_EMBED:
        return classes.type.embed;

      case __.TYPE_GALLERY:
        return classes.type.gallery;

      case __.TYPE_ARTICLE:
      case __.TYPE_CUSTOM:
      default:
        return classes.type.post;
    }
  }
}

// ------------------- //
export default SocialPostContent;
// ------------------- //
