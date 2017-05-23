import React from 'react';
import { render } from 'react-dom'; 

import DebugTools from "./components/debug-tools/DebugTools";
import SocialPost from "./components/social-post/SocialPost";

render(<SocialPost/>, document.querySelector('#sp-1'));
render(<DebugTools/>, document.querySelector('#debug-tools'));
