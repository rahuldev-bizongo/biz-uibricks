import { useLocation, useNavigate } from 'react-router-dom';

// const FormContext = createContext({});

// const FormProvider = ({ children }) => {
//   return (
//     <FormContext.Provider value={{}}>
//       {children}
//     </FormContext.Provider>
//   );
// };

const Form = ({ action, children, onSubmit, ...props }) => {
  const navigate = useNavigate();

  const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  const currentPath = location.pathname;
  // let dataId = queryParams.get("dataId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect all input data
    const formData = new FormData(e.target);
    const inputPayload = {};
    formData.forEach((value, key) => {
      inputPayload[key] = value;
    });


    /** hard coded logic for sending key from frontend */

    // if (!dataId) {
    //   dataId = localStorage.getItem('input_id');
    // }

    // if (!dataId) {
    //   dataId = localStorage.getItem('user_id');
    // }

    // if (!dataId) {
    //   dataId = localStorage.getItem('enquiry_id');
    // }



    /** hard coded logic end */

    // Prepare final payload for submission
    const finalPayload = {
      ...onSubmit.payload,
      input_data: inputPayload,
      // input_data_id: dataId,
      route: currentPath
    };

    try {
      // Perform the API call
      const response = await fetch(onSubmit.url, {
        method: onSubmit.method || 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify(finalPayload),
      });

      if (!response.ok) {
        // Log error details from API response
        const errorDetails = await response.json();
        console.error('Failed to submit form:', response.statusText, errorDetails);
        return;
      }

      const responseData = await response.json();
      console.log('Form submitted successfully:', responseData);

      if (responseData.next_node_id) {
        let url = responseData.next_node_id;
        navigate(url);
      }
      // please update accordingly
      /*
      // Handle redirection if specified
      if (onSubmit.navigateUrl) {
        let url = onSubmit.navigateUrl;
        if (onSubmit.passInputDataId && responseData.input_data_id) {
          url = `${url}?dataId=${responseData.input_data_id}`;
        }
        navigate(url);
      }

      if (onSubmit.navigateStep) {
        const url = `${currentPath}?step=${onSubmit.navigateStep}`;
        navigate(url);
      }

      */

      // if (responseData.input_data_id) {
      //   localStorage.setItem("input_id", responseData.input_data_id);
      // }

      if (action) {
        action(responseData.template);
        return;
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

// export const providers = FormProvider;
export default Form;
