import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/form.css';
import 'react-image-crop/dist/ReactCrop.css';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import App from './App';
import {ToastContainer} from 'react-toastify';

ReactDOM.render(
    <React.StrictMode>
        <ToastContainer/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


