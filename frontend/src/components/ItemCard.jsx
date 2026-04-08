import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ItemCard = ({ item }) => {
  const isRent = item.type === 'rent';
  const priceDisplay = isRent ? `₹${item.price}/hr` : `₹${item.price}`;

  const renderBadge = () => {
    if (!item.demandBadge) return null;
    let bgColor = 'var(--primary)';
    
    if (item.demandBadge === 'High Demand') bgColor = 'var(--danger)';
    if (item.demandBadge === 'Special') bgColor = 'var(--badge-special)';
    if (item.demandBadge === 'For Sale') bgColor = 'var(--success)';

    return (
      <span style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: bgColor,
        color: 'white',
        padding: '0.25rem 0.75rem',
        borderRadius: 'var(--radius-pill)',
        fontSize: '0.75rem',
        fontWeight: 600,
        boxShadow: 'var(--shadow-sm)'
      }}>
        {item.demandBadge}
      </span>
    );
  };

  return (
    <Link to={`/item/${item.id}`} className="card" style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{ position: 'relative', height: '200px', backgroundColor: 'var(--bg-light)', overflow: 'hidden' }}>
        <img 
          src={item.image} 
          alt={item.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
          className="item-image"
        />
        {renderBadge()}
        {!item.available && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255,255,255,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            color: 'var(--text-dark)'
          }}>
            Currently Unavailable
          </div>
        )}
      </div>
      
      <div style={{ padding: '1rem' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {item.category}
          </span>
          <div className="flex items-center gap-2" style={{ fontSize: '0.875rem', color: 'var(--warning)', fontWeight: 500 }}>
            <Star size={14} fill="currentColor" /> {item.rating}
          </div>
        </div>
        
        <h3 className="h3" style={{ marginBottom: '0.5rem', fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.name}
        </h3>
        
        <div className="flex justify-between items-center" style={{ marginTop: '1rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)' }}>
            {priceDisplay}
          </span>
          <span className={`btn ${isRent ? 'btn-outline' : 'btn-primary'}`} style={{ padding: '0.35rem 0.75rem', fontSize: '0.875rem' }}>
            {isRent ? 'Rent Now' : 'Buy Now'}
          </span>
        </div>
      </div>
      
      <style>{`
        .card:hover .item-image {
          transform: scale(1.05);
        }
      `}</style>
    </Link>
  );
};

export default ItemCard;
