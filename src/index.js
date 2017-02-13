import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';


const rootElem = document.getElementById('root');

const render = (Component) => {
  const container = (
    <AppContainer>
      <Component />
    </AppContainer>
  );

  ReactDOM.render(container, rootElem);
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}

