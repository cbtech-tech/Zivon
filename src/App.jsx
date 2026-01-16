import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Engineering from './pages/Engineering';
import Cloud from './pages/Cloud';
import AIAndData from './pages/AIAndData';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/products" element={<Products />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/ai-and-data" element={<AIAndData />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
