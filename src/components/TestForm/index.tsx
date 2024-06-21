import { SubmitButton } from '../SubmitButton';
import { updateSomethingAction } from './action';
import { useActionState } from 'react';
import { initialTestFormData } from './state';
import { AlertText } from '../AlertText';

export const TestForm = () => {
  const [formState, formAction, pending] = useActionState(
    updateSomethingAction,
    initialTestFormData
  );
  const fieldErrors = formState.error?.fieldErrors;

  return (
    <>
      <div style={{ textAlign: 'left' }}>name: {formState.name}</div>
      <div style={{ textAlign: 'left' }}>email: {formState.email}</div>
      <div style={{ textAlign: 'left' }}>test: {formState.test}</div>
      <div style={{ textAlign: 'left' }}>number: {formState.number}</div>
      <form
        action={formAction}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginTop: '16px',
        }}
      >
        <input type="text" placeholder="Name" name="name" />
        <AlertText>
          エラーメッセージ: {fieldErrors?.['name']?.message}
        </AlertText>
        <input type="email" placeholder="Email" name="email" />
        <AlertText>
          エラーメッセージ: {fieldErrors?.['email']?.message}
        </AlertText>
        <input type="text" placeholder="test" name="test" />
        <AlertText>
          エラーメッセージ: {fieldErrors?.['test']?.message}
        </AlertText>
        <input
          type="text"
          placeholder="number"
          name="number"
          pattern="^-?[0-9]?(.)?[0-9]$"
        />
        <AlertText>
          エラーメッセージ: {fieldErrors?.['number']?.message}
        </AlertText>
        <SubmitButton pending={pending} />
      </form>
    </>
  );
};
