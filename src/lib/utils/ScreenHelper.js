import ww from 'window-watcher';

// ------------------- //
  // MODILE ---------------- //
// ------------------- //

class ScreenHelper {
  /**
   * Get current screen's size 
   * @return object (width and height)
   */
  static getSize () {
    return {
      width   : ww.width,
      height  : ww.height
    }
  }
  /*
   * Get getBreakPoint name
   * @return string
   */
  static getBreakPoint(prefix="size") {
    if (ScreenHelper.isXS()) {
      return `${prefix}-xs`;
    } else if (ScreenHelper.isSM()) {
      return `${prefix}-sm`;
    } else if (ScreenHelper.isMD()) {
      return `${prefix}-md`;
    } else if (ScreenHelper.isLG()) {
      if (ScreenHelper.isLG()) {
        return `${prefix}-lg ${prefix}-xl`;
      } else {
        return `${prefix}-lg`;
      }
    }
  }
  /*
   * Check is Phones
   * @return boolean
   */
  static isXS() {
    return window.innerWidth < 768;
  }
  /*
   * Check is Tablets
   * @return boolean
   */
  static isSM() {
    return window.innerWidth >= 768 
    && window.innerWidth < 992;
  }
  /*
   * Check is Medium Desktops
   * @return boolean
   */
  static isMD() {
    return window.innerWidth >= 992 
    && window.innerWidth < 1200;
  }
  /*
   * Check is Large Desktops
   * @return boolean
   */
  static isLG() {
    return window.innerWidth >= 1200;
  }
  /*
   * Check is Extra Large Desktops
   * @return boolean
   */
  static isXL() {
    return window.innerWidth >= 1400
  }
  /**
   * Calcul ratio
   * @param srcWidth
   * @param srcHeight
   * @param maxWidth
   * @param maxHeight
   * @return object (width and height)
   */
  static calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = [maxWidth / srcWidth, maxHeight / srcHeight ];
    ratio = Math.min(ratio[0], ratio[1]);
    return { width:srcWidth*ratio, height:srcHeight*ratio };
  }
}

// ------------------- //
export default ScreenHelper;
// ------------------- //


