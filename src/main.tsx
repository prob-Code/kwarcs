// import React from 'react';
// import { createRoot } from 'react-dom/client'
// import { HelmetProvider } from 'react-helmet-async';
// import App from './App.tsx'
// import ReactFirebase from './ReactFirebase.js'; 
// import './index.css'

// createRoot(document.getElementById("root")!).render(
//   <HelmetProvider>
//     <App />
//     <ReactFirebase />
//   </HelmetProvider>
// );





// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import ReactFirebase from './ReactFirebase/ReactFirebase';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
    <ReactFirebase />
  </HelmetProvider>
);
