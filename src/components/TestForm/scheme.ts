import { z } from "zod";

export const TestFormScheme = z.object({
    name: z.string(),
    email: z.string(),
});

export type TestFormData = z.infer<typeof TestFormScheme>;

export const initialTestFormData: TestFormData = {
    name: "",
    email: "",
};
