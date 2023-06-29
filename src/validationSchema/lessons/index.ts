import * as yup from 'yup';

export const lessonValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
