const headingStyle = {
  primary: {
    color: '#333333', // dark gray
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0.5rem 0'
  },
  secondary: {
    color: '#666666', // light gray
    fontSize: '1.25rem',
    fontWeight: 'medium',
    margin: '0.5rem 0'
  },
  error: {
    color: '#dc3545', // red
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '0.5rem 0'
  },
  warning: {
    color: '#ffc107', // yellow
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '0.5rem 0'
  },
  success: {
    color: '#28a745', // green
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '0.5rem 0'
  }
};

const Heading = ({ content, type = 'primary' }) => {
  return <p style={headingStyle[type]}>{content}</p>;
};

export default Heading;
