import { Serie, User } from "../common/entities";
import { Service } from "typedi";
import { getRepository, Repository } from "typeorm";
import { SerieInput } from "src/graphql/types/serie";
import { ApolloError } from "apollo-server-errors";

@Service()
export class SerieService {
  private serieRepository: Repository<Serie> = getRepository(Serie);

  async addSerie(input: SerieInput, user: User): Promise<Serie> {
    const errorMessage = "Serie with title already exists";
    const { title } = input;
    const serieFound = await this.findSerieByTitle(title);
    if (serieFound) {
      throw new ApolloError(errorMessage);
    }
    const serieInput: Serie = { ...input, userId: user.id };
    return await this.serieRepository.save({ ...serieInput });
  }

  async getSeries(userId: string): Promise<Serie[]> {
    return this.serieRepository.find({ userId });
  }

  async deleteSerie(id: string): Promise<boolean> {
    const result = await this.serieRepository.delete({ id });
    return result.affected > 0;
  }

  private async findSerieByTitle(title: string): Promise<Serie> {
    return await this.serieRepository.findOne({ title });
  }

  private async findSerieById(serieId: string): Promise<Serie> {
    return await this.serieRepository.findOne({ id: serieId });
  }
}
