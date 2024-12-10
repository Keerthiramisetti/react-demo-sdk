import React, { useState } from 'react';
import './Tag.css'; // Include the corresponding styles

const Tag = ({ initialTags = [], color = 'blue', closable = true, maxTags = 5 }) => {
  const [tags, setTags] = useState(initialTags);

  // Handle deleting a tag
  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  // Handle adding a new tag
  const handleAddTag = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      if (tags.length < maxTags) {
        setTags([...tags, e.target.value.trim()]);
        e.target.value = ''; // Clear input field after adding
      } else {
        alert(`You can only add up to ${maxTags} tags.`);
      }
    }
  };

  return (
    <div className="tag-container">
      <div className="tag-list">
        {tags.map((tag, index) => (
          <div key={index} className={`tag tag-${color}`}>
            <span>{tag}</span>
            {closable && (
              <button onClick={() => handleDelete(tag)} className="tag-close-btn">
                &times;
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Input field to add tags */}
      <input
        type="text"
        placeholder="Add a tag"
        onKeyDown={handleAddTag}
        className="tag-input"
        maxLength={20} // Optional: Max character length for tags
      />
    </div>
  );
};

export default Tag;





