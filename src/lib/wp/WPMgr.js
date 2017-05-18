import { DEBUG } from "../../constant";
import WPClient from "./WPClient";
import WPost from "./WPost";

// ------------------- //
  // CLASS WP MANAGER  ------------------- //
// ------------------- //

class WPMgr {};

// ------------------- //
export default WPMgr;
// ------------------- //

if (DEBUG) {
  window.WPClient = WPClient;
  window.WPost = WPost;
  window.WPMgr = WPMgr;
}
