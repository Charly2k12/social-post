import wpapi from "wpapi";
import {
  BASE_URL,
  WP_API,
} from "../../constant";

// ------------------- //
  // CLASS WP CLIENT  ------------------- //
// ------------------- //

const WPClient = new wpapi({ 
  endpoint: `${BASE_URL}/${WP_API}` 
});

// ------------------- //
export default WPClient;
// ------------------- //



/*

WPClient.posts().id(1)
  .then(function( data ) {
      // do something with the returned posts
      console.log(data)
  }).catch(function( err ) {
      // handle error
      console.error(err)
  });

WPClient.pages().slug('purchase-wonderform')
  .then(function( data ) {
      // do something with the returned posts
      console.log(data)
  }).catch(function( err ) {
      // handle error
      console.error(err)
  });

*/