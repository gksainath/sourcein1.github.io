import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, LogIn, Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock auth state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="navbar-header" style={{
        backgroundColor: 'var(--bg-nav)',
        boxShadow: 'var(--shadow-sm)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div className="container flex items-center justify-between" style={{ height: '70px' }}>
          {/* Logo */}
          <Link to="/" className="logo flex items-center gap-2" style={{ color: 'var(--primary)' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Sourcein</span>
          </Link>

          {/* Desktop Search Bar (Hidden on Mobile) */}
          <div className="search-bar hidden-mobile" style={{ flex: 1, maxWidth: '500px', margin: '0 2rem' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Search items, books, calculators..." 
                className="input-field"
                style={{ paddingLeft: '2.5rem', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--bg-main)', border: 'none' }}
              />
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          {/* Nav Actions */}
          <div className="nav-actions flex items-center gap-4 hidden-mobile">
            {isAuthenticated ? (
              <>
                <Link to="/add-item" className="btn btn-outline" style={{ borderRadius: 'var(--radius-pill)' }}>+ Add Item</Link>
                <Link to="/dashboard" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-pill)' }}>
                  <User size={18} /> Dashboard
                </Link>
              </>
            ) : (
              <button onClick={() => setAuthModalOpen(true)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-pill)' }}>
                <LogIn size={18} /> Login / Sign Up
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'none' }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu" style={{ backgroundColor: 'var(--bg-card)', padding: '1rem', borderTop: '1px solid var(--border-light)' }}>
            <div style={{ marginBottom: '1rem' }}>
              <input 
                type="text" 
                placeholder="Search..." 
                className="input-field"
                style={{ width: '100%', marginBottom: '1rem' }}
              />
            </div>
            <div className="flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link to="/add-item" className="btn btn-outline" onClick={toggleMenu}>+ Add Item</Link>
                  <Link to="/dashboard" className="btn btn-primary" onClick={toggleMenu}>Dashboard</Link>
                </>
              ) : (
                <button onClick={() => { setAuthModalOpen(true); toggleMenu(); }} className="btn btn-primary">
                  Login / Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        onLogin={() => {
          setIsAuthenticated(true);
          setAuthModalOpen(false);
        }}
      />
      
      {/* Scope CSS for mobile menu hiding */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; color: var(--text-dark); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
