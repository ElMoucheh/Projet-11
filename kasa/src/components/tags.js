import React from 'react';
import '../assets/components/tags.scss';

const Tags = ({ tags }) => {
  return (
    <div className='list_tags'>
      {tags.map((tag, index) => (
        <div className='tag' key={index}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default Tags;
