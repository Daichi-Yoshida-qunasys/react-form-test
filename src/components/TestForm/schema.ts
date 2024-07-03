import { z } from 'zod';

const REGEXP = new RegExp('^-?[0-9]?(.)?[0-9]$');

export const TestFormScheme = z.object({
  name: z.string().min(1, { message: '必須項目です。' }),
  email: z
    .string()
    .min(1, { message: '必須項目です。' })
    .email({ message: '無効なメールアドレスです。' }),
  test: z
    .string()
    .length(4, { message: '4文字で入力してください。' })
    .optional(),
  number: z
    .string()
    .regex(REGEXP, { message: '数値を入力してください。' })
    .optional(),
});

export const NameFiledSchema = TestFormScheme.pick({ name: true });

export const EmailFiledSchema = TestFormScheme.pick({ email: true });

export const TestFiledSchema = TestFormScheme.pick({ test: true });

export const NumberFiledSchema = TestFormScheme.pick({ number: true });
