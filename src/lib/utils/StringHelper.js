
// ------------------- //
  // CLASS STRING  ------------------- //
// ------------------- //

class StringHelper {
  /*
   * Transform str to slug
   * @param str string
   * @param sep is separator default "-"
   * @return slug string
   */
  static slugify(str, sep = "-") {
    let slug = "";
    let rExps=[
      {re:/[\xC0-\xC6]/g, ch:'A'},
      {re:/[\xE0-\xE6]/g, ch:'a'},
      {re:/[\xC8-\xCB]/g, ch:'E'},
      {re:/[\xE8-\xEB]/g, ch:'e'},
      {re:/[\xCC-\xCF]/g, ch:'I'},
      {re:/[\xEC-\xEF]/g, ch:'i'},
      {re:/[\xD2-\xD6]/g, ch:'O'},
      {re:/[\xF2-\xF6]/g, ch:'o'},
      {re:/[\xD9-\xDC]/g, ch:'U'},
      {re:/[\xF9-\xFC]/g, ch:'u'},
      {re:/[\xC7-\xE7]/g, ch:'c'},
      {re:/[\xD1]/g, ch:'N'},
      {re:/[\xF1]/g, ch:'n'} 
    ];

    for(let i=0, len=rExps.length; i<len; i++) {
      slug=str.replace(rExps[i].re, rExps[i].ch);
    }

    slug = slug.toLowerCase()
      .replace(/\s+/g, sep)
      .replace(/[^a-z0-9-_]/g, '')
      .replace(/\-{2,}/g, sep);

    if (slug.length > 1 
      && slug[slug.length-1] === "-") {
      slug = slug.slice(0, -1);
    }

    return slug;
  }
}

// ------------------- //
export default StringHelper;
// ------------------- //