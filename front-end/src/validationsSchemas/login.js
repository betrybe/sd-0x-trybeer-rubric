import * as yup from 'yup';

const minPassword = 6;
const required = 'campo obrigatório';

export const loginSchema = yup.object().shape({
  email: yup
    .string('tem que ser string').email('não é email').required(required),
  password: yup.string()
    .min(minPassword, 'senha com no minimo 6 caracteres').required(required),
});

export const passwordSchema = yup.object().shape({
  password:
  yup.string()
    .min(minPassword, 'senha com no minimo 6 caracteres').required(required),
});
