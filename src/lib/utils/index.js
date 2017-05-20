import { DEBUG } from "../../constant";
import BodyHelper from "./BodyHelper";
import StringHelper from "./StringHelper";
import ValueHelper from "./ValueHelper";

// ------------------- //
  // CLASS UTILS  ------------------- //
// ------------------- //

const Utils = {
  body    :   BodyHelper,
  string  :   StringHelper,
  value   :   ValueHelper
};

// ------------------- //
export default Utils;
// ------------------- //

if (DEBUG) {
  window.Utils = Utils;
}
