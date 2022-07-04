const Validation = (values) => {



  let errors = {};
  if (!values.fullName) {
    errors.fullName = "Full name is required";
  }
  if (!values.startDate) {
    errors.startDate = "Start Date is required";
  }
  if (!values.endDate) {
    errors.endDate = "End Date is required";
  }
  if (values.startDate > values.endDate) {
    errors.select = "The end date must be later than the start date";
  }
  // if (brons.filter((bron) => ((bron.endDate >= values.startDate && bron.startDate <= values.startDate) ||
  //   (bron.endDate >= values.endDate && bron.startDate <= values.endDate)))
  // ) {
  //   errors.errorDate = "The Room is already booked for these days";
  // }
  return errors;
};

export default Validation;
