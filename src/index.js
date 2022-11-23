import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import App from 'App';
// import 'modern-normalize/modern-normalize.css';
import GlobalStyle from 'GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename='/sandra-coach' forceRefresh='true'>
//       <GlobalStyle />
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/sandra-coach' forceRefresh='true'>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);