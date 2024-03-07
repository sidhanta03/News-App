// CategorySelection.js
import React from 'react';

const Category = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className='selection-container mt-3'>
      <label htmlFor="category" className='label'>Select Category:</label>
      <select id="category" value={selectedCategory} onChange={onCategoryChange} className='dropdown'>
        <option value="">All</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
};

export default Category;
