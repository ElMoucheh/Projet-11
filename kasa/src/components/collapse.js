import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/img/white/arrow-up.svg';
import '../assets/components/collapse.scss';

const Collapse = ({ title, content, isList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='collapse'>
      <div 
        className={`list_header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{title}</p>
        <Logo />
      </div>
      <div className={`collapse_content ${isOpen ? 'open' : ''}`}>
        {isList ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;