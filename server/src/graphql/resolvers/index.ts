import HelloResolver from "./hello.resolver";
import { MovieResolver } from "./movie.resolver";
import { SeasonResolver } from "./season.resolver";
import { SerieResolver } from "./serie.resolver";
import { UserResolver } from "./user.resolver";

export const resolvers = [HelloResolver, UserResolver, MovieResolver, SerieResolver, SeasonResolver] as const;
