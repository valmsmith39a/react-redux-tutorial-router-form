// Mapping - for this URL show this component, etc
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);

// 4 routes
// /, /greet, /greet2, /greet3
// google.com/ => renders App
