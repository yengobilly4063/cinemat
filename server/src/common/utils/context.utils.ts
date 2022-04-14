import Context from "../types/context";
import { User } from "../entities";
import { verifyToken } from "./password.utils";

export const setContextUser = async (context: Context): Promise<Context> => {
  if (context.req.headers.authorization) {
    const token = context.req.headers.authorization.split(" ")[1];
    const user = verifyToken<User>(token);
    context.user = user;
  }
  return context;
};
