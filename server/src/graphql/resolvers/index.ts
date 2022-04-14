import HelloResolver from "./hello.resolver";
import { UserResolver } from "./user.resolver";

export const resolvers = [HelloResolver, UserResolver] as const;
