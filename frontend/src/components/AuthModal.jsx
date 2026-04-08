import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('.edu')) {
      setError('Only college email (.edu) allowed for signup/login.');
      return;
    }
    setError('');
    // Mock successful login
    onLogin();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content animate-fade-in card" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 className="h2" style={{ marginBottom: '0.5rem' }}>Welcome to Sourcein</h2>
          <p style={{ color: 'var(--text-muted)' }}>Sign in with your campus email to get started.</p>
        </div>

        {error && (
          <div style={{ backgroundColor: 'var(--danger)', color: 'white', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.875rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div style={{ position: 'relative' }}>
            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="email" 
              placeholder="College Email (e.g. student@college.edu)" 
              className="input-field"
              style={{ paddingLeft: '2.5rem' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="password" 
              placeholder="Password" 
              className="input-field"
              style={{ paddingLeft: '2.5rem' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>
            Login / Sign Up
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          By continuing, you agree to Sourcein's Terms of Service and Privacy Policy.
        </p>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
        .modal-content {
          width: 90%;
          max-width: 400px;
          padding: 2rem;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: var(--text-muted);
        }
        .close-btn:hover {
          color: var(--text-dark);
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
