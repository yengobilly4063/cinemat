import { config } from "dotenv";

const { parsed } = config();

export const {
  NODE_ENV,
  PORT,
  FRONTEND_URL,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  JWT_SECRETE_KEY,
  JWT_EXPIRATION,
  GRAPHQL_PATH,
  DOMAIN,
  MAX_AGE,
} = parsed;
