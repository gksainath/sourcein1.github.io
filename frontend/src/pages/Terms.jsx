import React from 'react';

const Terms = () => {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1" style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>
        
        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="h3" style={{ marginBottom: '0.5rem' }}>1. Platform Disclaimer</h2>
            <p style={{ color: 'var(--text-body)' }}>
              Sourcein is a peer-to-peer facilitation platform intended strictly for use by registered students. Sourcein is not a party to any transactions and is not responsible for the condition of items or specific arrangements made between users.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 className="h3" style={{ marginBottom: '0.5rem' }}>2. User Responsibility</h2>
            <p style={{ color: 'var(--text-body)' }}>
              Users are solely responsible for ensuring the accuracy of listings, returning items in the condition they were received, and adhering to mutual agreements regarding pricing and times.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 className="h3" style={{ marginBottom: '0.5rem' }}>3. Late Return Policy</h2>
            <p style={{ color: 'var(--text-body)' }}>
              Failure to return rented items on time may result in additional charges equal to the hourly/daily rented rate multiplied by a factor of 1.5. Repeated violations will result in campus ID ban.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 className="h3" style={{ marginBottom: '0.5rem' }}>4. Prohibited Items</h2>
            <p style={{ color: 'var(--text-body)' }}>
              The exchange of illegal substances, weapons, exam answer keys, alcohol, and any items violating campus policies is strictly prohibited and will be reported to campus security.
            </p>
          </div>

          <div style={{ marginBottom: '0' }}>
            <h2 className="h3" style={{ marginBottom: '0.5rem' }}>5. Campus-Only Usage</h2>
            <p style={{ color: 'var(--text-body)' }}>
              Registration is restricted to `.edu` emails. Delivery and exchange must occur within the safe confines of the campus environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
