import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Shield, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { mockOwner } from '../data/mockData';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, totalPrice, rentHours } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!item) {
    return <div className="section container" style={{ textAlign: 'center' }}><Link to="/">Return Home</Link></div>;
  }

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500); // Mock processing delay
  };

  if (isSuccess) {
    return (
      <div className="section">
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div className="card" style={{ padding: '3rem 2rem' }}>
            <CheckCircle size={64} color="var(--success)" style={{ margin: '0 auto 1.5rem' }} />
            <h1 className="h2" style={{ marginBottom: '1rem' }}>Payment Successful!</h1>
            <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>
              Your {item.type === 'rent' ? 'rental booking' : 'purchase'} for <strong>{item.name}</strong> is confirmed.
            </p>

            <div style={{ backgroundColor: 'var(--primary-light)', padding: '1.5rem', rounded: 'var(--radius-md)', textAlign: 'left', border: '1px solid var(--primary)', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
              <h3 className="h3" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-hover)' }}>
                <Shield size={20} /> Owner Contact Unlocked
              </h3>
              <div className="flex flex-col gap-2">
                <p><strong>Name:</strong> {mockOwner.name}</p>
                <p><strong>Phone:</strong> {mockOwner.phone}</p>
                <p><strong>Email:</strong> {mockOwner.email}</p>
                <p><strong>Location:</strong> {mockOwner.year}, {mockOwner.branch} Department</p>
              </div>
            </div>

            <button onClick={() => navigate('/dashboard')} className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container grid" style={{ maxWidth: '1000px', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Left: Summary */}
        <div>
          <h1 className="h2" style={{ marginBottom: '1.5rem' }}>Order Summary</h1>
          <div className="card" style={{ padding: '1.5rem' }}>
            <div className="flex gap-4" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
              <div>
                <h3 className="h3" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                <span className="badge" style={{ backgroundColor: 'var(--bg-main)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', border: '1px solid var(--border-light)' }}>
                  {item.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-body)' }}>Base Price</span>
                <span>₹{item.price} {item.type === 'rent' && '/ hr'}</span>
              </div>
              {item.type === 'rent' && (
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-body)' }}>Duration</span>
                  <span>{rentHours} hrs</span>
                </div>
              )}
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-body)' }}>Platform Fee</span>
                <span style={{ color: 'var(--success)' }}>Free for Campus</span>
              </div>
              <div className="flex justify-between" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-light)', fontSize: '1.25rem', fontWeight: 700 }}>
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Payment */}
        <div>
          <h1 className="h2" style={{ marginBottom: '1.5rem' }}>Payment Method</h1>
          <div className="card" style={{ padding: '1.5rem' }}>
            
            <div className="flex flex-col gap-3" style={{ marginBottom: '2rem' }}>
              
              <label className="flex items-center gap-3" style={{ border: `1px solid ${paymentMethod === 'upi' ? 'var(--primary)' : 'var(--border-light)'}`, padding: '1rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', backgroundColor: paymentMethod === 'upi' ? 'var(--bg-main)' : 'transparent' }}>
                <input type="radio" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                <Smartphone size={20} color={paymentMethod === 'upi' ? 'var(--primary)' : 'var(--text-muted)'} />
                <span style={{ fontWeight: 500 }}>UPI (GPay, PhonePe)</span>
              </label>

              <label className="flex items-center gap-3" style={{ border: `1px solid ${paymentMethod === 'card' ? 'var(--primary)' : 'var(--border-light)'}`, padding: '1rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', backgroundColor: paymentMethod === 'card' ? 'var(--bg-main)' : 'transparent' }}>
                <input type="radio" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                <CreditCard size={20} color={paymentMethod === 'card' ? 'var(--primary)' : 'var(--text-muted)'} />
                <span style={{ fontWeight: 500 }}>Credit / Debit Card</span>
              </label>

              <label className="flex items-center gap-3" style={{ border: `1px solid ${paymentMethod === 'net' ? 'var(--primary)' : 'var(--border-light)'}`, padding: '1rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', backgroundColor: paymentMethod === 'net' ? 'var(--bg-main)' : 'transparent' }}>
                <input type="radio" checked={paymentMethod === 'net'} onChange={() => setPaymentMethod('net')} />
                <Banknote size={20} color={paymentMethod === 'net' ? 'var(--primary)' : 'var(--text-muted)'} />
                <span style={{ fontWeight: 500 }}>Net Banking</span>
              </label>
              
            </div>

            <button 
              onClick={handlePayment} 
              disabled={isProcessing}
              className="btn btn-primary" 
              style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
            >
              {isProcessing ? 'Processing Securely...' : `Pay ₹${totalPrice}`}
            </button>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '1rem' }}>
              Payments are fully encrypted and secured.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .container.grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Payment;
