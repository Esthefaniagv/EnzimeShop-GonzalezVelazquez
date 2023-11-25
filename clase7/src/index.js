import React from 'react';
import ReactDOM from 'react-dom/client';
import getPhotos from './api';

import App from "./App";

const el = document.getElementById("root")

const root = ReactDOM.createRoot(el)

getPhotos();

root.render(<App />);