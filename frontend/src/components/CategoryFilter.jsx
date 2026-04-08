import React from 'react';
import { categories } from '../data/mockData';

const CategoryFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="category-scroll-container">
      <div className="category-scroll hide-scrollbar">
        <button
          className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => onSelectCategory('All')}
        >
          All
        </button>
        {categories.map((cat, index) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={index}
              className={`category-btn ${isActive ? 'active' : ''} ${cat === 'Campus Special' ? 'special' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat === 'Campus Special' && <span style={{ marginRight: '4px' }}>✨</span>}
              {cat}
            </button>
          );
        })}
      </div>

      <style>{`
        .category-scroll-container {
          position: relative;
          margin: 2rem 0;
        }
        
        .category-scroll {
          display: flex;
          overflow-x: auto;
          gap: 1rem;
          padding-bottom: 0.5rem;
          scroll-behavior: smooth;
        }

        .category-btn {
          white-space: nowrap;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-pill);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-body);
          background-color: #fff;
          border: 1px solid var(--border-light);
          transition: all 0.2s;
        }

        .category-btn:hover {
          border-color: var(--primary-light);
          background-color: var(--bg-main);
        }

        .category-btn.active {
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .category-btn.special {
          border-color: var(--badge-special);
          color: var(--badge-special);
          background-color: rgba(139, 92, 246, 0.05);
        }

        .category-btn.special:hover {
          background-color: rgba(139, 92, 246, 0.1);
        }

        .category-btn.special.active {
          background-color: var(--badge-special);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default CategoryFilter;
