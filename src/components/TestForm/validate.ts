import type { ZodError } from 'zod';
import { TestFormScheme } from './schema';

// Zod によるバリデーション
export function validateFormData(formData: FormData) {
  return TestFormScheme.parse(Object.fromEntries(formData));
}

// 各項目のエラーをマッピング
export function transformFiledErrors(err: ZodError) {
  return Object.fromEntries(
    err.errors.map(({ path, message }) => [path[0], { message }])
  );
}
