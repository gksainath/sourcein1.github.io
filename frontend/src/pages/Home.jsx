import React, { useState } from 'react';
import { mockItems } from '../data/mockData';
import ItemCard from '../components/ItemCard';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');

  const filteredItems = mockItems.filter(item => {
    let matchCategory = activeCategory === 'All' || item.category === activeCategory;
    let matchGender = true;
    if (genderFilter !== 'All') {
      matchGender = item.gender === genderFilter;
    }
    return matchCategory && matchGender;
  });

  return (
    <div className="section">
      <div className="container">
        
        {/* Hero / Header */}
        <div style={{ textAlign: 'center', margin: '2rem 0 3rem' }}>
          <h1 className="h1" style={{ marginBottom: '1rem' }}>
            Find what you need, right on <span style={{ color: 'var(--primary)' }}>campus.</span>
          </h1>
          <p style={{ color: 'var(--text-body)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Rent or buy academics tools, daily essentials, and special hometown treats from your peers securely.
          </p>
        </div>

        {/* Filters Area */}
        <CategoryFilter 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
          <h2 className="h2" style={{ margin: 0 }}>
            {activeCategory === 'All' ? 'Trending on Campus' : activeCategory}
          </h2>

          <div className="flex items-center gap-2">
            <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Gender:</label>
            <select 
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
            >
              <option value="All">Any</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Grid List */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-4 animate-fade-in">
            {filteredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            <p>No items found for the selected criteria.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
