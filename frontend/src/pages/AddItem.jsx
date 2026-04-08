import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/mockData';
import { Upload } from 'lucide-react';

const AddItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: categories[0],
    gender: 'All',
    listingType: 'rent',
    price: '',
    availability: ''
  });
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    if (images.length >= 3) {
      alert("Maximum 3 images allowed.");
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages([...images, url]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const validatePrice = () => {
    const price = parseInt(formData.price, 10);
    if (isNaN(price)) return "Please enter a valid price.";
    
    if (formData.listingType === 'rent') {
      if (formData.category === 'Academics') {
        if (price < 5 || price > 40) return "Academic rent price must be between ₹5 and ₹40 / hour.";
      }
      if (formData.category === 'Electronics') {
        if (price < 25 || price > 150) return "Electronics rent price must be between ₹25 and ₹150 / hour.";
      }
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const priceError = validatePrice();
    if (priceError) {
      setError(priceError);
      return;
    }
    setError('');
    
    alert("Item listed successfully!");
    navigate('/dashboard');
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <h1 className="h2" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Add New Item</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Image Upload */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Upload Images (Max 3)</label>
              <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                {images.map((img, i) => (
                  <div key={i} style={{ position: 'relative', width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="preview" />
                    <button 
                      type="button" 
                      onClick={() => removeImage(i)}
                      style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(0,0,0,0.5)', color: 'white', padding: '0.2rem' }}>
                      &times;
                    </button>
                  </div>
                ))}
                {images.length < 3 && (
                  <label style={{ 
                    width: '80px', height: '80px', border: '1px dashed var(--text-muted)', 
                    borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', cursor: 'pointer', color: 'var(--primary)' 
                  }}>
                    <Upload size={24} />
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                  </label>
                )}
              </div>
            </div>

            {/* Basic Info */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Item Name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Casio fx-991EX Calculator" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Description</label>
              <textarea 
                className="input-field" 
                placeholder="Condition, origin, why you're listing it..." 
                rows="3"
                required
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>

            {/* Classification */}
            <div className="grid grid-cols-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Category</label>
                <select className="input-field" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Gender Tag (Optional)</label>
                <select className="input-field" value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})}>
                  <option value="All">Not Applicable</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Listing Type & Price */}
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <label style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="radio" checked={formData.listingType === 'rent'} onChange={() => setFormData({...formData, listingType: 'rent'})} />
                  <strong>Rent Item</strong>
                </label>
                <label style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="radio" checked={formData.listingType === 'sell'} onChange={() => setFormData({...formData, listingType: 'sell'})} />
                  <strong>Sell Item</strong>
                </label>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                  {formData.listingType === 'rent' ? 'Price per hour (₹)' : 'Total Price (₹)'}
                </label>
                <input 
                  type="number" 
                  className="input-field" 
                  placeholder={formData.listingType === 'rent' ? 'e.g. 15' : 'e.g. 500'} 
                  required
                  value={formData.price}
                  onChange={e => {
                    setFormData({...formData, price: e.target.value});
                    if (error) setError('');
                  }}
                />
                
                {formData.listingType === 'rent' && formData.category === 'Academics' && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Guideline: ₹5 - ₹40 / hour for Academics.</p>
                )}
                {formData.listingType === 'rent' && formData.category === 'Electronics' && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Guideline: ₹25 - ₹150 / hour for Electronics.</p>
                )}
                
                {error && <p style={{ color: 'var(--danger)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{error}</p>}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Availability Timing</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Weekdays 5PM - 8PM, Boys Hostel A" 
                required
                value={formData.availability}
                onChange={e => setFormData({...formData, availability: e.target.value})}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem' }}>
              List Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
