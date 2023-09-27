import React from 'react';
import SketchfabViewer from './components/model';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/loginPage';
import NotFoundPage from './components/notFoundPage';
import './App.css'
function App() {
  const sketchfabModelId = 'd045eaf534384d9eb926245a5a09ead4'; // Replace with your Sketchfab model ID

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="redirect" element={<SketchfabViewer modelId={sketchfabModelId} />} />
          <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

