import React from 'react';
import { render } from 'react-dom'; 

import DebugTools from "./components/DebugTools";
import SocialPost from "./components/SocialPost";

render(<DebugTools/>, document.querySelector('#debug-tools'));
render(<SocialPost/>, document.querySelector('#sp-1'));

