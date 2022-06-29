import * as yup from "yup";

export const userSchema = yup.object().shape({
  fullName: yup.string().required(),
  startDate: yup.date().required(),
  endDate: yup.date().required(),
  price: yup.number().required(),
});
