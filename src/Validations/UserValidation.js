const UserValidation = (values,users) => {

  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (users) {
    let isUsers = users.filter(
      (user) =>user.email===values.email);
      
    if (isUsers && isUsers.length) {
      errors.samePassword = "This email address is already being used!";
    }
  }
 
  return errors;
};

export default UserValidation;
