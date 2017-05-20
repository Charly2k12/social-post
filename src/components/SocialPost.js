
import React, {Component} from 'react';
import Col from "./Col";
import Clear from "./Clear";
import Icon from "./Icon";
import Action from "./Action";
import VideoEmbed from "./VideoEmbed";


// ------------------- //
  // SOCIAL POST ------------------- //
// ------------------- //

const classes = {
  overlay       : "sp-overlay",
  wrapper       : "sp-wrapper",
  container     : "sp-container",
  content       : "sp-content",
  body        : {
    is          : "sp-body",
    hover       : "__body_hover",
    content     : "sp-body-content",
    header      : "sp-body-header",
    footer      : "sp-body-footer",
  },
  sidebar     : {
    is          : "sp-sidebar",
    hover       : "__sidebar_hover",
    content     : "sp-sidebar-content"
  },
  type        : {
    embed       : "sp--embed",
    image       : "sp--image",
    gallery     : "sp--gallery",
    post        : "sp--post"
  },
  el          : {
    title       : "sp-el-title",
    counter     : "sp-el-counter",
    actions     : "sp-el-actions",
  },
  btn         : {
    close       : 'sp-close',
  },
  icon        : {
    close       : "close",
  }
}

class SocialPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: ""
    }
  }
  render () {
    return (
      <social-post>
        <div className={`${classes.overlay}`} style={{
          backgroundColor: "rgba(0, 0, 0, .9)"
        }}/>
        <div className={`${classes.wrapper} ${this.state.classNames}`}>
          <div className={`${classes.container}`}>
            <Icon 
            icon={classes.icon.close} 
            className={`${classes.btn.close}`}
            onClick={() => console.error("CLOSE...")}
            />
            <div className={`${classes.content}`}>
              <div className={`${classes.body.is}`}
              onMouseEnter={() => this.onToggleClass(classes.body.hover)}
              onMouseLeave={() => this.onToggleClass(classes.body.hover)}
              >

                {/* HEADER */}    
                <div className={`${classes.body.header}`}>
                  <span className={`${classes.el.title}`}>
                    Backstage avec <strong>Mélissa Rodriguez</strong> photo prise par Tran Dac-Phat et Emmanuel Petit
                    <span className={`${classes.el.counter}`}>
                      1/6
                    </span>
                  </span>
                </div>   

                {/* FOOTER */}    
                <div className={`${classes.body.footer}`}>
                  <div className={`${classes.el.actions}`}>
                  {
                    [{
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
                    }].map((a,i) => <Action key={i} {...a}/>
                    )
                  }
                  </div>   
                </div>   

                {/* VIDEO */}    
                <div className={`${classes.body.content} ${classes.type.embed}`}>
                  <VideoEmbed src={"https://www.youtube.com/embed/z_aC5xPQ2f4?ecver=2"}/>
                </div>   

                {/* Image */}  
                {/* Gallery */}  
                {/* Article */}  


              </div>
              <div className={`${classes.sidebar.is}`}>
                
              </div>
              <Clear/>
            </div>
          </div>
        </div>
      </social-post>
    )
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
      classNames: nextValue
    });
  }
}

// ------------------- //
export default SocialPost;
// ------------------- //