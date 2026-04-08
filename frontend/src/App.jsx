import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import ItemDetail from './pages/ItemDetail';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
