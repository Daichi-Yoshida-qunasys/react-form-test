import { SubmitButton } from '../SubmitButton';
import { initialTestFormData } from './scheme';
import { updateSomethingAction } from './action';
import { useActionState } from 'react';

export const TestForm = () => {
  const [state, formAction, pending] = useActionState(
    updateSomethingAction,
    initialTestFormData
  );

  return (
    <>
      <div>name: {state.name}</div>
      <div>email: {state.name}</div>
      <form
        action={formAction}
        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <SubmitButton pending={pending} />
      </form>
    </>
  );
};
