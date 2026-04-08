import React, { useState } from 'react';
import { Package, ShoppingBag, Wallet, TrendingUp } from 'lucide-react';
import { mockItems } from '../data/mockData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Earnings', value: '₹1,250', icon: <Wallet size={24} color="var(--success)" />, bg: 'rgba(16, 185, 129, 0.1)' },
    { label: 'Active Listings', value: '3', icon: <Package size={24} color="var(--primary)" />, bg: 'rgba(37, 99, 235, 0.1)' },
    { label: 'My Bookings', value: '2', icon: <ShoppingBag size={24} color="var(--warning)" />, bg: 'rgba(245, 158, 11, 0.1)' },
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="h1" style={{ marginBottom: '2rem' }}>My Dashboard</h1>

        {/* Top Stats */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {stats.map((stat, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: stat.bg, borderRadius: 'var(--radius-md)' }}>
                {stat.icon}
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>{stat.label}</p>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{stat.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--border-light)', marginBottom: '2rem' }}>
          {['overview', 'listings', 'bookings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem 0 1rem',
                fontSize: '1rem',
                fontWeight: activeTab === tab ? 600 : 500,
                color: activeTab === tab ? 'var(--primary)' : 'var(--text-muted)',
                borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                textTransform: 'capitalize',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === 'overview' && (
            <div className="grid grid-cols-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 className="h3">Demand Analytics</h3>
                  <TrendingUp size={20} color="var(--primary)" />
                </div>
                <p style={{ color: 'var(--text-body)', marginBottom: '2rem', fontSize: '0.875rem' }}>
                  Campus demand usually spikes during the exam weeks. Prepare to list calculators and notes!
                </p>
                
                {/* Mock Graph using precise CSS */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '150px', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                  {[40, 50, 30, 80, 100, 60, 45].map((height, idx) => (
                     <div key={idx} style={{ flex: 1, backgroundColor: height === 100 ? 'var(--danger)' : 'var(--primary-light)', height: `${height}%`, borderRadius: '4px 4px 0 0', position: 'relative', transition: 'height 0.3s' }}>
                       {height === 100 && <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--danger)' }}>Exam Week</span>}
                     </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="h3" style={{ marginBottom: '1.5rem' }}>Recent Activity</h3>
                <ul className="flex flex-col gap-4" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ borderLeft: '2px solid var(--success)', paddingLeft: '1rem' }}>
                    <p style={{ fontWeight: 500, fontSize: '0.875rem' }}>Earned ₹150 from Renting</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Scientific Calculator - 10 hours</p>
                  </li>
                  <li style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '1rem' }}>
                    <p style={{ fontWeight: 500, fontSize: '0.875rem' }}>Listed New Item</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Mechanical Keyboard</p>
                  </li>
                  <li style={{ borderLeft: '2px solid var(--warning)', paddingLeft: '1rem' }}>
                    <p style={{ fontWeight: 500, fontSize: '0.875rem' }}>Booked an Item</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Arduino Uno Rev3</p>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'listings' && (
             <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
               {/* Just reusing mockData for aesthetics */}
               {mockItems.slice(0, 3).map(item => (
                 <div key={item.id} className="card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                   <img src={item.image} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                   <div>
                     <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.name}</p>
                     <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Listed as: {item.type}</p>
                   </div>
                 </div>
               ))}
             </div>
          )}

          {activeTab === 'bookings' && (
             <div className="card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
               <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
               <p>No active bookings right now.</p>
             </div>
          )}
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .grid-cols-4 { grid-template-columns: 1fr !important; gap: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
