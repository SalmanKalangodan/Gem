import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import { Store } from './Redux/Store/Store.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ToastContainer />
     <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
