import { Request, Response } from "express";

interface Context {
  req: Request;
  res: Response;
}

export default Context;
