import React from 'react';

const contentData = {
  networking: 'Networking content goes here.',
  ai: 'AI content goes here.',
};

const Content = ({ selectedKey }) => {
  return (
    <div className="content">
      <h3>{selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1)}</h3>
      <p>{contentData[selectedKey]}</p>
    </div>
  );
};

export default Content;
