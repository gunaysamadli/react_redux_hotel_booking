const  ReviewValidation= (values) => {

    let errors = {};
    if (!values.commend) {
      errors.commend = "Text is required";
    }
   
    return errors;
  };
  
  export default ReviewValidation;
  