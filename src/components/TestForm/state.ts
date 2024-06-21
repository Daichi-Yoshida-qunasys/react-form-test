import { z } from 'zod';
import { TestFormScheme } from './schema';

export const errors = {
  400: { message: 'Bad Request', status: 400 },
  401: { message: 'Unauthorized', status: 401 },
  500: { message: 'Internal Server Error', status: 500 },
};

export type FieldErrors = Record<string, { message: string }>;

type Error = {
  message: string;
  status: number;
  fieldErrors?: FieldErrors;
};

export type Payload = z.infer<typeof TestFormScheme>;

export type TestFormData = Payload & {
  error: Error | null;
};

export const initialTestFormData: TestFormData = {
  name: '',
  email: '',
  test: '',
  number: '',
  error: null,
};

export const handleError = (
  prevState: TestFormData,
  error: Error
): TestFormData => ({
  ...prevState,
  error,
});
