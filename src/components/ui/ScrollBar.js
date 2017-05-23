
import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// ------------------- //
// WF SCROLLBAR ------------------- //
// ------------------- //

let classes = {
  wrapper: "sp-scrollbar",
}

class ScrollBar extends Component {
  render () {
    return (
      <Scrollbars
      className={classes.wrapper}
      onScroll={this.handleScroll}
      onScrollFrame={this.handleScrollFrame}
      onScrollStart={this.handleScrollStart}
      onScrollStop={this.handleScrollStop}
      onUpdate={this.handleUpdate}
      renderView={this.renderView}
      renderTrackHorizontal={this.renderTrackHorizontal}
      renderTrackVertical={this.renderTrackVertical}
      renderThumbHorizontal={this.renderThumbHorizontal}
      renderThumbVertical={this.renderThumbVertical}
      autoHide={true}
      autoHideTimeout={1000}
      autoHideDuration={200}
      thumbMinSize={30}
      universal={true}
      {...this.props}/>
    );
  }
}

// ------------------- //
export default ScrollBar;
// ------------------- //