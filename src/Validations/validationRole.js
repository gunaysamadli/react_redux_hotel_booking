const validationRole = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    return errors;
  };
  
  export default validationRole;
  