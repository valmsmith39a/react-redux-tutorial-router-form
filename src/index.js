import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Router decides what react components to render when URL changes.
// Tells router how to interpret changes to URL
// Ex. http://www.blog.com/posts/5 when posts/5 changes, browserHistory will tell router to change
// Others hashHistory etc.
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
