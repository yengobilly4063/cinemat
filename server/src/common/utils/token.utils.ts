import jwt from "jsonwebtoken";
import * as _env from "../../config";
import { User } from "../entities";

export const generateToken = (user: User): string => {
  const { password, ...signUser } = user;
  return jwt.sign({ ...signUser }, _env.JWT_SECRETE_KEY, { expiresIn: _env.JWT_EXPIRATION });
};

export const verifyToken = <T>(token: string): T | null => {
  try {
    return jwt.verify(token, _env.JWT_SECRETE_KEY) as T;
  } catch (error) {
    return null;
  }
};
