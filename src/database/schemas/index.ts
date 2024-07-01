import * as users from "./users";
import * as accounts from "./accounts";

export const schema = {
  ...users,
  ...accounts,
};
export type Schema = typeof schema;
