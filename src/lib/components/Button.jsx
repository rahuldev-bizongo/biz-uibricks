import { Button } from '../../components/ui/button';

const BizButton = ({ label, type, onClick, variant = "primary" }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button
      variant={variant}
      type={type || 'button'}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default BizButton;
