import React from 'react';

const Container = ({ style = {}, backgroundImage, children }) => {
  const defaultStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    minHeight: 'auto',
    position: 'relative',
    ...style
  };

  if (backgroundImage) {
    defaultStyle.backgroundImage = `url(${backgroundImage})`;
    defaultStyle.backgroundSize = 'cover';
    defaultStyle.backgroundPosition = 'center';
    defaultStyle.backgroundRepeat = 'no-repeat';
    defaultStyle.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    defaultStyle.backdropFilter = 'blur(5px)';
  }

  return (
    <div style={defaultStyle}>
      {children}
    </div>
  );
};

export default Container;