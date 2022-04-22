/* eslint-disable import/no-named-as-default */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// eslint-disable-next-line import/no-named-as-default-member
import reportWebVitals from './reportWebVitals';
import './index.css';

// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	/*   <React.StrictMode> */
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	/*   </React.StrictMode>, */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
