import React from 'react';

const ListItem = ({ title, description, style }) => {
  return (
    <li style={{ padding: '10px', borderBottom: '1px solid #ddd', ...style }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </li>
  );
};

export default ListItem;
