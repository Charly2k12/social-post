const body = document.querySelector( 'body' );

// ------------------- //
  // CLASS BODY  ------------------- //
// ------------------- //

class BodyHelper {

  /*
   * Toggle Class in body
   * @param clss is string
   */
  static toggleClass(clss) {
    body.classList.contains(clss)
    ? body.classList.remove(clss)
    : body.classList.add(clss)
    ;
  }

  /*
   * Add Class in body
   * @param clss is string
   */
  static addClass(clss) {
    body.classList.add(clss)
  }

  /*
   * Remove Class in body
   * @param clss is string
   */
  static removeClass(clss) {
    body.classList.remove(clss)
  }

}

// ------------------- //
export default BodyHelper;
// ------------------- //