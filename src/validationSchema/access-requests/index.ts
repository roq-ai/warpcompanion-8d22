import * as yup from 'yup';

export const accessRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  guest_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
