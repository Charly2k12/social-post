
// ------------------- //
  // CLASS EVENT LISTNER  ------------------- //
// ------------------- //

class EventListenerHelper {

  /*
   * Add Events
   * @param eventType
   * @param callback
   */
  static add(eventType, callback) {
    if (window.addEventListener) {
      window.addEventListener(eventType, callback, false);
    } else if (window.attachEvent) {
      window.attachEvent(`on${eventType}`, callback);
    }
  }

  /*
   * Remove Events
   * @param eventType
   * @param callback
   */
  static remove(eventType, callback) {
    if (window.removeEventListener) {
      window.removeEventListener(eventType, callback, false);
    } else if (window.detachEvent) {
      window.detachEvent(`on${eventType}`, callback);
    }
  }
}

// ------------------- //
export default EventListenerHelper;
// ------------------- //
