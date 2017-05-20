import {
  value
} from "../utils";

// ------------------- //
  // CLASS WP POST  ------------------- //
// ------------------- //

class WPost {
  constructor(post) {
    const {
      type = "",
      id = 0,
      slug = "",
      format = "",
      link = "",
      author = 0,
      date = null,
      title = {},
      excerpt = {},
      content = {},
      tags = [],
      categories = [],
      comment_status = "",
    } = post;
    this.id         = parseInt(id); 
    this.type       = type;  
    this.slug       = slug;  
    this.format     = format;  
    this.link       = link;  
    this.author     = author;
    this.date       = date;
    this.comment_status = comment_status;
    this.tags       = tags.map( tag_id => parseInt(tag_id)); 
    this.categories = categories.map( cat_id => parseInt(cat_id)); 
    this.title      = value.getObjVal(title, "rendered", ""); 
    this.content    = value.getObjVal(content, "rendered", "");
    this.excerpt    = value.getObjVal(excerpt, "rendered", "");
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }

  getSlug() {
    return this.slug;
  }

  getFormat() {
    return this.format;
  }

  getAuthor() {
    return this.author;
  }

  getLink() {
    return this.link;
  }

  getDate() {
    return this.date;
  }

  getTitle() {
    return this.title;
  }

  getExcerpt() {
    return this.excerpt;
  }

  getContent() {
    return this.content;
  }

  getTags() {
    return this.tags;
  }

  getCategories() {
    return this.categories;
  }

  getCommentStatus() {
    return this.comment_status; // 'hold', 'approve', 'spam', or 'trash'.
  }

};

// ------------------- //
export default WPost;
// ------------------- //