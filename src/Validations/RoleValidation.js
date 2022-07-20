const Roledation = (values, users,user) => {
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
  if (!values.role) {
    errors.role = "Role is required";
  }
  if (users) {
    let isUsers = users.filter((user) => user.email === values.email);
    if (isUsers && isUsers.length) {
      if(user.email!==isUsers[0].email){
        errors.samePassword = "This email address is already being used!";
      }
    }
  }
  return errors;
};

export default Roledation;
