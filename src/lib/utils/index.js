import { DEBUG } from "../../constant";
import BodyHelper from "./BodyHelper";
import StringHelper from "./StringHelper";

// ------------------- //
  // CLASS UTILS  ------------------- //
// ------------------- //

const Utils = {
  body: BodyHelper,
  string: StringHelper,
};

// ------------------- //
export default Utils;
// ------------------- //

if (DEBUG) {
  window.Utils = Utils;
}
