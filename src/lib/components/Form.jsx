const Form = ({ children, onFormSubmit, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(e);
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
