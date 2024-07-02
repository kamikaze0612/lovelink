import { any, boolean, object, optional, record, string } from "valibot";
import type { InferOutput } from "valibot";

export const FormStateSchema = object({
  data: optional(record(string(), any())),
  error: optional(string()),
  success: boolean(),
});
type _FormState = InferOutput<typeof FormStateSchema>;
export type FormState =
  | { data?: _FormState["data"]; success: true }
  | {
      data?: _FormState["data"];
      success: false;
      error: Required<_FormState["error"]>;
    };
