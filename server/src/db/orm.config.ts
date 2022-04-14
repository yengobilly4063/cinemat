import path from "path";
import { ConnectionOptions } from "typeorm";
import * as _env from "../config";

const ormconfig: ConnectionOptions = {
  type: "mysql",
  host: _env.NODE_ENV === "production" ? _env.DB_HOST : "127.0.0.1",
  port: Number(_env.DB_PORT),
  username: _env.DB_USERNAME,
  password: _env.DB_PASSWORD,
  database: _env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [],
};

export default ormconfig;
