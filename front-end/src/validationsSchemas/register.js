import * as yup from 'yup';
import { loginSchema } from './login';

const minNameLength = 12;

const mergeSchema = (...schemas) => {
  const [first, ...rest] = schemas;
  return rest.reduce((mergedSchemas, schema) => mergedSchemas.concat(schema), first);
};

export const nameSchema = yup.object().shape({
  name: yup.string()
    .matches(/^[a-zA-Z\s]*$/,
      'deve conter, no mínimo, 12 letras, sem números ou caracteres especiais')
    .min(minNameLength,
      'deve conter, no mínimo, 12 letras, sem números ou caracteres especiais'),
});

export const RegisterSchema = mergeSchema(nameSchema, loginSchema);
