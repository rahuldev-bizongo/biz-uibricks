import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const BizButton = ({ label, type, style, action, variant = "outline" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataId = queryParams.get("dataId");

  const handleClick = async () => {
    if (!action) return;

    try {
      if (action.type === 'navigate' && action.url) {
        let url = action.url;
        if (action.passInputDataId && dataId) {
          url = `${url}?dataId=${dataId}`;
        }
        navigate(url);
      } else if (action.type === 'api') {
        const response = await fetch(action.url, {
          method: action.method || 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(action.payload || {}),
        });

        if (!response.ok) {
          console.error('API call failed:', response.status, await response.json());
          return;
        }

        console.log('API response:', await response.json());
      } else if (action.type === 'apiAndNavigate') {
        const response = await fetch(action.url, {
          method: action.method || 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(action.payload || {}),
        });

        if (!response.ok) {
          console.error('API call failed:', response.status, await response.json());
          return;
        }

        const responseData = await response.json();
        console.log('API response:', responseData);

        if (action.navigateUrl) {
          let url = action.navigateUrl;
          if (action.passInputDataId && responseData.input_data_id) {
            url = `${url}?dataId=${responseData.input_data_id}`;
          }
          navigate(url);
        }
      }
    } catch (error) {
      console.error('Error handling button action:', error);
    }
  };

  return (
    <Button 
      variant={variant} 
      type={type || 'button'} 
      onClick={handleClick}
      style={style}
    >
      {label}
    </Button>
  );
};

export default BizButton;
