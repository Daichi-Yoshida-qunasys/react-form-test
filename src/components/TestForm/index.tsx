import { SubmitButton } from '../SubmitButton';
import { updateSomethingAction } from './action';
import { useActionState, useState } from 'react';
import { initialTestFormData, FieldErrors } from './state';
import { AlertText } from '../AlertText';
import {
  NameFiledSchema,
  EmailFiledSchema,
  TestFiledSchema,
  NumberFiledSchema,
} from './schema';
import { transformFiledErrors } from './validate';

export const TestForm = () => {
  const [nameError, setNameError] = useState<FieldErrors | null>(null);
  const [emailError, setEmailError] = useState<FieldErrors | null>(null);
  const [testError, setTestError] = useState<FieldErrors | null>(null);
  const [numberError, setNumberError] = useState<FieldErrors | null>(null);
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
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => {
            const name = e.target.value;
            const result = NameFiledSchema.safeParse({ name });
            if (!result.success) {
              setNameError(transformFiledErrors(result.error));
              return;
            }
            setNameError(null);
          }}
        />
        <AlertText>
          エラーメッセージ:{' '}
          {fieldErrors?.['name']?.message ?? nameError?.['name']?.message}
        </AlertText>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            const email = e.target.value;
            const result = EmailFiledSchema.safeParse({ email });
            if (!result.success) {
              setEmailError(transformFiledErrors(result.error));
              return;
            }
            setEmailError(null);
          }}
        />
        <AlertText>
          エラーメッセージ:{' '}
          {fieldErrors?.['email']?.message ?? emailError?.['email']?.message}
        </AlertText>
        <input
          type="text"
          placeholder="test"
          name="test"
          onChange={(e) => {
            const test = e.target.value;
            const result = TestFiledSchema.safeParse({ test });
            if (!result.success) {
              setTestError(transformFiledErrors(result.error));
              return;
            }
            setTestError(null);
          }}
        />
        <AlertText>
          エラーメッセージ:{' '}
          {fieldErrors?.['test']?.message ?? testError?.['test']?.message}
        </AlertText>
        <input
          type="text"
          placeholder="number"
          name="number"
          pattern="^-?[0-9]?(.)?[0-9]$"
          onChange={(e) => {
            const number = e.target.value;
            const result = NumberFiledSchema.safeParse({ number });
            if (!result.success) {
              setNumberError(transformFiledErrors(result.error));
              return;
            }
            setNumberError(null);
          }}
        />
        <AlertText>
          エラーメッセージ:{' '}
          {fieldErrors?.['number']?.message ?? numberError?.['number']?.message}
        </AlertText>
        <SubmitButton pending={pending} />
      </form>
    </>
  );
};
