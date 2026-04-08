import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#F3F4F6', padding: '3rem 0 1rem', marginTop: 'auto' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-light)', marginBottom: '1rem', display: 'block' }}>
              Sourcein
            </Link>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
              The campus-based peer-to-peer marketplace where students can rent or sell items securely.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#FFFFFF' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }} className="flex flex-col gap-2">
              <li><Link to="/" style={{ color: '#9CA3AF' }}>Home</Link></li>
              <li><Link to="/add-item" style={{ color: '#9CA3AF' }}>Add Item</Link></li>
              <li><Link to="/dashboard" style={{ color: '#9CA3AF' }}>Dashboard</Link></li>
              <li><Link to="/terms" style={{ color: '#9CA3AF' }}>Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#FFFFFF' }}>Categories</h3>
            <ul style={{ listStyle: 'none', padding: 0 }} className="flex flex-col gap-2">
              <li style={{ color: '#9CA3AF' }}>Academics</li>
              <li style={{ color: '#9CA3AF' }}>Electronics</li>
              <li style={{ color: '#9CA3AF' }}>Sports Equipment</li>
              <li style={{ color: '#9CA3AF' }}>Campus Special</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#FFFFFF' }}>Contact</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginBottom: '0.5rem' }}>support@sourcein.edu</p>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Campus IT Center, Room 404</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #374151', paddingTop: '1.5rem', textAlign: 'center', color: '#6B7280', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Sourcein. All rights reserved. Built for students.
        </div>
      </div>
      <style>{`
        footer a:hover, footer li:hover {
          color: #FFFFFF !important;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
