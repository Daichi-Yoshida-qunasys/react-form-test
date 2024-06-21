import { TestFormData } from './scheme';

export const updateSomethingAction = async (
  prevState: TestFormData,
  formData: FormData
) => {
  //NOTE - ここで非同期気処理を行う
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  console.log('name', name);
  console.log('email', email);

  return { ...prevState, name, email };
};
