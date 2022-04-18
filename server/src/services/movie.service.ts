import { Movie, User } from "../common/entities";
import { getRepository } from "../common/utils/repository.utils";
import { Service } from "typedi";
import { Repository } from "typeorm";
import { MovieInput } from "src/graphql/types/movie";
import { ApolloError } from "apollo-server-errors";

@Service()
export class MovieService {
  private movieRepository: Repository<Movie> = getRepository(Movie);

  async addMovie(input: MovieInput, user: User): Promise<Movie> {
    const errorMessage = "Movie with title already exists";
    const { title } = input;
    const foundMovie = await this.findMovieByTitle(title, this.movieRepository);
    if (foundMovie) throw new ApolloError(errorMessage);

    const movieInput: Movie = { ...input, userId: user.id };

    return await this.movieRepository.save({ ...movieInput }, { reload: true });
  }

  async editMovie(input: MovieInput): Promise<Movie> {
    const errorMessage = "Movie not found";
    const { id } = input;

    const foundMovie = await this.findMovieById(id, this.movieRepository);
    if (!foundMovie) throw new ApolloError(errorMessage);
    await this.movieRepository.update({ id }, input);

    return this.movieRepository.findOne({ id });
  }

  async deleteMovie(id: string): Promise<boolean> {
    const result = await this.movieRepository.delete({ id });
    return result.affected > 0;
  }

  private async findMovieById(id: string, repository: Repository<Movie>): Promise<Movie> {
    return await repository.findOne({ id });
  }

  private async findMovieByTitle(title: string, repository: Repository<Movie>): Promise<Movie> {
    return await repository.findOne({ title });
  }
}
