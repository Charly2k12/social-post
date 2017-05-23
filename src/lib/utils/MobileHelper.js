const userAgent = navigator.userAgent || navigator.vendor || window.opera;

// ------------------- //
  // MODILE ---------------- //
// ------------------- //

class MobileHelper {
  /*
   * Check is mobile
   * @return boolean
   */
  static is() {
    return /Mobi/.test( navigator.userAgent )
  }
  /*
   * Check is Window Phone
   * @return boolean
   */
  static isWindowPhone() {
    return /windows phone/i.test(userAgent);
  }
  /*
   * Check is Android Phone
   * @return boolean
   */
  static isAndroidPhone() {
    return /android/i.test(userAgent);
  }
  /*
   * Check is IOS Phone
   * @return boolean
   */
  static isIOSPhone() {
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  }

}

// ------------------- //
export default MobileHelper;
// ------------------- //
