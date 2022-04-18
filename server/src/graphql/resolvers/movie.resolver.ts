import { Movie } from "../../common/entities";
import { MovieService } from "../../services";
import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { MovieInput } from "../types/movie";
import Context from "../../common/types/context";

@Service()
@Resolver()
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Mutation(() => Movie)
  @Authorized()
  async addMovie(@Arg("input") input: MovieInput, @Ctx() context: Context): Promise<Movie> {
    const { user } = context;
    return this.movieService.addMovie(input, user);
  }

  @Mutation(() => Movie)
  @Authorized()
  async editMovie(@Arg("input") input: MovieInput): Promise<Movie> {
    return this.movieService.editMovie(input);
  }

  @Mutation(() => Boolean)
  @Authorized()
  async deleteMovie(@Arg("id") id: string): Promise<boolean> {
    return this.movieService.deleteMovie(id);
  }
}
