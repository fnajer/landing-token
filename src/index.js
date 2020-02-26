import React from 'react';
import ReactDOM from 'react-dom';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import 'styles/reset.scss';
import './index.css';
import App from 'app';
import * as serviceWorker from './serviceWorker';
// import webFontLoader from 'webfontloader'

import IntlProvider from 'locales/IntlProvider';
//import setupGlobalLocales from 'shared/helpers/setupGlobalLocales'

setConfiguration({ 
  gutterWidth: 0, 
  containerWidths:	[540, 750, 960, 1110],
  breakpoints: [576, 768, 1024, 1200]
});


// webFontLoader.load({
//   google: {
//     families: [
//       'Montserrat:100,200,200,300,400,500,600,700,800,900:latin-ext,cyrillic:display-swap',
//     ],
//   },
// })

ReactDOM.render(
  <IntlProvider>
    <ScreenClassProvider>
      <App />
    </ScreenClassProvider>
  </IntlProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!') // eslint-disable-line

  module.hot.accept()
}
