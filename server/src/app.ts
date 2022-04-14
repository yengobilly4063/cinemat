import express, { Application } from "express";
import { Connection, createConnection } from "typeorm";
import ormDbConnectionOptions from "./db/orm.config";
import "reflect-metadata";
import * as _env from "./config";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import Context from "./common/types/context";
import { buildSchema } from "type-graphql";
import { resolvers } from "./graphql/resolvers";
import Container from "typedi";
import { setContextUser } from "./common/utils/context.utils";
import authChecker from "./graphql/middlewares/auth.graphql";

const PORT = _env.NODE_ENV === "production" ? _env.PORT : 5000;

const main = async () => {
  try {
    const schema = await buildSchema({
      resolvers,
      authChecker,
      container: Container,
    });

    const app: Application = express();
    app.use(express.json());
    app.use(cors({ origin: _env.FRONTEND_URL, credentials: true }));

    const apolloServer = new ApolloServer({
      schema,
      context: async (context: Context) => {
        context = await setContextUser(context);
        return context;
      },
      plugins: [
        _env.NODE_ENV === "development"
          ? ApolloServerPluginLandingPageGraphQLPlayground
          : ApolloServerPluginLandingPageProductionDefault,
      ],
    });

    const connection: Connection = await createConnection(ormDbConnectionOptions);
    console.log(`Connection to ${connection.driver.database} database established`);

    await apolloServer.start();

    apolloServer.applyMiddleware({ app, path: _env.GRAPHQL_PATH });

    app.listen({ port: PORT }, () => {
      console.log(`server running on http://localhost:${PORT}${_env.GRAPHQL_PATH}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

main();
