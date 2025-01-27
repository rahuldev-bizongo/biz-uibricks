const logo = 'https://next.bizongo.com/assets/next.9df68a9fd76a976153351c39c2b9f452.svg'

const Header = ({ content, style, imageSrc, imageAlt, imageStyle }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        marginBottom: '10px',
        height: "50px",
        ...style,
      }}
    >
      <h1
        style={{
          margin: '0 auto',
          textAlign: 'center',
          flex: '1',
          color: 'black'
        }}
      >
        {content}
      </h1>
      <img
        src={imageSrc || logo || "https://next.bizongo.com/assets/next.9df68a9fd76a976153351c39c2b9f452.svg"}
        alt={imageAlt || 'Header Image'}
        style={{
          maxHeight: '50px',
          maxWidth: '50px',
          objectFit: 'contain',
          ...imageStyle,
        }}
      />

    </div>
  );
};

export default Header;
