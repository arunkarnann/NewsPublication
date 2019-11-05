import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SpotifyApiContext } from 'react-spotify-api';

ReactDOM.render(<SpotifyApiContext.Provider value="BQDKRIoSV_yLcM1lSKfngHC2o8vCq3zNNn1Pxlqhx5rYw5W3TZiNkaXjPPZPJz0mV4tVDQK_TQT-6C_CtSgcnFR7wgR_mAP9EQVHomCWkAUyAdhpe7tCQe0-AjFgR4cLMhwo4X6jtmmdbvap4IkefPR2E34Dl-5uMb0d6g">
  <App />
</SpotifyApiContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
