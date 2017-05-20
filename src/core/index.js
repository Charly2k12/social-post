import AppHistory from "./AppHistory";
import AppView from "./AppView";

const Apps = {};

// ------------------- //
  // CLASS APP  ------------------- //
// ------------------- //

class App {
  constructor(schema) {
    const {
      bodyConfig = {},
      sidebarConfig = {},
    } = schema;
    // this.id = uniqId();
    this.bodyView    = new AppView('body', bodyConfig);
    this.sidebarView = new AppView('sidebar', sidebarConfig);
    this.history     = new AppHistory("init", schema);
  }

  open() {}

  close() {}

  explore(schema) {}

  back() {}

};

// ------------------- //
export default WPComments;
// ------------------- //

/*

var app = new App({ 
  sidebarConfig: {
    visible: true,
    position: "right", // left || right || bottom
    schema: []
  },
  bodyConfig: {
    type: "", // image, gallery, video, map, wform, post
    schema: []
  }
})

app.open();
app.close();
app.explore({}); // history 
app.back();

// --------- //

M
fixe date

// -------- //
*/