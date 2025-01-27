import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';

// const ButtonContext = createContext({});

// const ButtonProvider = ({ children }) => {
//   return (
//     <ButtonContext.Provider value={{}}>
//       {children}
//     </ButtonContext.Provider>
//   );
// };

const BizButton = ({ label, type, style, action }) => {
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
        // Navigate directly
        navigate(url);
      } else if (action.type === 'api') {
        // Perform API call only
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
        // Perform API call and navigate
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
    // <button
    //   type={type || 'button'}
    //   style={{ border: "8px 16px", borderRadius: '8px', cursor: 'pointer' }}
    //   onClick={handleClick}
    // >
    //   {label}
    // </button>

    <Button variant="outline" type={type || 'button'} onClick={handleClick}>{label}</Button>
  );
};

// export const providers = ButtonProvider;
export default BizButton;
