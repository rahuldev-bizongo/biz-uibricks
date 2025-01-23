import React from 'react';

const ContainerRow = ({ style, children }) => {
  return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px'}}>{children}</div>;
};

export default ContainerRow;
