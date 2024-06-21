import { ZodError } from 'zod';
import { TestFormScheme } from './schema';
import { transformFiledErrors } from './validate';
import { TestFormData, errors, handleError } from './state';

export const updateSomethingAction = async (
  prevState: TestFormData,
  formData: FormData
): Promise<TestFormData> => {
  //NOTE - ここで非同期気処理を行う
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const test = formData.get('test') as string;
  const number = formData.get('number') as string;

  const values = { ...prevState, name, email, test, number };

  try {
    const payload = TestFormScheme.parse(values);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { ...payload, error: null };
  } catch (error) {
    if (error instanceof ZodError) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return handleError(prevState, {
        ...errors[400],
        fieldErrors: transformFiledErrors(error),
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return handleError(prevState, errors[500]);
  }
};
