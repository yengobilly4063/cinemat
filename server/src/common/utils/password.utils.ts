import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as _env from "../../config";

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (enteredPassword: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

export const verifyToken = <T>(token: string): T | null => {
  try {
    return jwt.verify(token, _env.JWT_SECRETE_KEY) as T;
  } catch (error) {
    return null;
  }
};
