import { DEBUG } from "../../constant";
import BodyHelper from "./BodyHelper";
import StringHelper from "./StringHelper";
import ValueHelper from "./ValueHelper";
import MobileHelper from "./MobileHelper";
import ScreenHelper from "./ScreenHelper";
import EventListenerHelper from "./EventListenerHelper";

// ------------------- //
  // CLASS UTILS  ------------------- //
// ------------------- //

const Utils = {
  body          : BodyHelper,
  string        : StringHelper,
  value         : ValueHelper,
  mobile        : MobileHelper,
  screen        : ScreenHelper,
  eventListner  : EventListenerHelper,
};

// ------------------- //
export default Utils;
// ------------------- //

if (DEBUG) {
  window.Utils = Utils;
}
