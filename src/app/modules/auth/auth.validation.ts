import {  z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ message: 'email is required' }),
    password: z.string({ message: 'password is required' }),
  }),
});

const userValidationSchema = z.object({
  email: z.string({ message: 'email is required' }),
  password: z
    .string({
      message: 'password must be string',
    })
    .max(20, { message: 'password cannot be more than 20 char ' })
    .optional(),
});

export const authValidation = {
  userValidationSchema,
  loginValidationSchema,
};
