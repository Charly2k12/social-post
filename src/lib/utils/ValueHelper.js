import {
  isArray,
  isObject,
  isBoolean,
  isNumber,
  isString
} from "./Lodash";

// ------------------- //
  // CLASS VALUE  ------------------- //
// ------------------- //

class ValueHelper {
  /*
   * Get Objec value by key
   * @param obj is object
   * @param key is string
   * @param defVal is null
   * @return value || defaultVal
   */
  static getObjVal(obj, key, defVal = null) {
    if (!key) return defVal;
    if (isObject(obj) && obj.hasOwnProperty(key)) {
      return obj[key];
    } else {
      return defVal;
    }
  }
}

// ------------------- //
export default ValueHelper;
// ------------------- //