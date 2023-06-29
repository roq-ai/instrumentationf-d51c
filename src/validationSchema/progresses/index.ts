import * as yup from 'yup';

export const progressValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  lesson_id: yup.string().nullable(),
});
