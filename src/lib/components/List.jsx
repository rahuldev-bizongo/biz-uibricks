import React from 'react';

const List = ({ children, style }) => {
  return (
    <ul style={{ listStyle: 'none', padding: '0', ...style }}>
      {children}
    </ul>
  );
};

export default List;
