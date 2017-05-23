
import React, {Component} from 'react';

// ------------------- //
  // BOOTSTRAP COL ------------------- //
// ------------------- //

let classes = {

  dev     : " dv",

  xs  : "col-xs-",
  sm  : " col-sm-",
  md  : " col-md-",
  lg  : " col-lg-",

  hidden  : " hidden-",
  visible : " visible-",

  reset           : " reset",
  reset_left      : " reset-left",
  reset_right     : " reset-right"
}

class Col extends Component {

  render () {
    const {
      visible=true,
      xs=12,
      style={}
    } = this.props;
    if(!visible || xs===0) {
      return false;
    } else {
      return (
        <div 
        style={style} 
        className={`${this.getClasses()}`}>
          {this.getChildren()}
        </div>
      )
    }
  }

  getChildren () {
    const {
      dev = false,
      children = ""
    } = this.props;
    if (!dev) {
      return children
    } else {
      return (
        <div className={classes.dev}>
          {children}
        </div>
      )
    }
  }

  getClasses () {

    const {
    xs=12,
    sm=null,
    md=null,
    lg=null,
    hidden=[],
    visible=[],
    className="",
    reset=false,
    resetLeft=false,
    resetRight=false,
    } = this.props;

    let clss = classes.xs + xs;
    clss += sm ? classes.sm + sm : "" ;
    clss += md ? classes.md + md : "" ;
    clss += lg ? classes.lg + lg : "" ;
    clss += reset ? classes.reset : "" ;
    clss += resetLeft ? classes.reset_left : "" ;
    clss += resetRight ? classes.reset_right : "" ;
    clss += hidden.length > 0 ? hidden.map(s => classes[s]+s) : "" ;
    clss += visible.length > 0 ? visible.map(s => classes[s]+s) : "" ;
    clss += className ? ` ${className}` : "" ;

    return clss;
  }
}

// ------------------- //
export default Col;
// ------------------- //

/*

<Col xs={12} sm={12} md={6} lg={6}></Col>
<Col visible={['md','sm']}></Col>
<Col hidden={['xs','lg']}></Col>

*/