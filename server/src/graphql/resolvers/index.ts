import HelloResolver from "./hello.resolver";
import { MovieResolver } from "./movie.resolver";
import { UserResolver } from "./user.resolver";

export const resolvers = [HelloResolver, UserResolver, MovieResolver] as const;
