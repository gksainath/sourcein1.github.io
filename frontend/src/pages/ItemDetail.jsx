import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockItems, mockOwner } from '../data/mockData';
import { Star, Shield, Clock, MapPin, Calendar } from 'lucide-react';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockItems.find(i => i.id === id);
  const [rentHours, setRentHours] = useState(1);

  if (!item) {
    return <div className="section container" style={{ textAlign: 'center' }}>Item not found!</div>;
  }

  const isRent = item.type === 'rent';
  const totalPrice = isRent ? item.price * rentHours : item.price;

  const handleBooking = () => {
    // Basic navigation to payment
    navigate('/payment', { state: { item, totalPrice, rentHours: isRent ? rentHours : null } });
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="card grid" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '0', overflow: 'hidden' }}>
          
          {/* Left: Images */}
          <div style={{ backgroundColor: 'var(--bg-light)', borderRight: '1px solid var(--border-light)' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }} />
          </div>

          {/* Right: Details */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {item.category}
              </span>
              <div className="flex items-center gap-1" style={{ fontSize: '1rem', color: 'var(--warning)', fontWeight: 500 }}>
                <Star size={18} fill="currentColor" /> {item.rating} <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>({item.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="h2" style={{ marginBottom: '1rem' }}>{item.name}</h1>
            
            <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {item.description}
            </p>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1 }}>₹{item.price}</span>
                <span style={{ color: 'var(--text-muted)' }}>{isRent ? '/ hour' : 'fixed price'}</span>
              </div>

              {isRent && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>Select Duration (Hours):</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="1" 
                      max="48" 
                      value={rentHours} 
                      onChange={e => setRentHours(parseInt(e.target.value, 10))}
                      style={{ flex: 1 }}
                    />
                    <span style={{ fontWeight: 600, width: '60px', textAlign: 'right' }}>{rentHours} hrs</span>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center" style={{ padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: 500 }}>Total Payable</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>₹{totalPrice}</span>
              </div>

              <button onClick={handleBooking} className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem' }} disabled={!item.available}>
                {item.available ? (isRent ? 'Proceed to Rent' : 'Buy Now') : 'Currently Unavailable'}
              </button>
            </div>

            <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <h3 className="h3" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={20} color="var(--success)" /> Owner Information
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                Owner details are protected. Complete the transaction to reveal name, contact info, and meetup location.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2" style={{ color: 'var(--text-body)', fontSize: '0.875rem' }}>
                  <Calendar size={16} /> Member since Aug 2024
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--text-body)', fontSize: '0.875rem' }}>
                  <MapPin size={16} /> Campus Meetup
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .card.grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ItemDetail;
