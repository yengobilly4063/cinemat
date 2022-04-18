import { getRepository } from "../common/utils/repository.utils";
import { Service } from "typedi";
import { Repository } from "typeorm";
import { Seasoninput } from "../graphql/types/season";
import { ApolloError } from "apollo-server-errors";
import { Season } from "../common/entities";

@Service()
export class SeasonService {
  private readonly seasonRepository: Repository<Season> = getRepository(Season);

  async addSeason(input: Seasoninput): Promise<Season> {
    const errorMessage = "Season with title already exists";
    const { serieId, title } = input;
    const seasonFound: Season = await this.seasonRepository.findOne({ serieId, title });
    if (seasonFound) {
      throw new ApolloError(errorMessage);
    }

    const serieSeasonsFound: Season[] = await this.findSeasonsBySerieId(serieId);
    const seasonInput: Season = { ...input, seasonNumber: serieSeasonsFound.length + 1 };

    return await this.seasonRepository.save({ ...seasonInput });
  }

  async findSeasonsBySerieId(serieId: string): Promise<Season[]> {
    return await this.seasonRepository.find({ serieId });
  }
}
