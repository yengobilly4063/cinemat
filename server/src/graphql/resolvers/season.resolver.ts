import { Season } from "../../common/entities";
import { SeasonService } from "../../services";
import { Arg, Authorized, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Seasoninput } from "../types/season";

@Service()
@Resolver(() => Season)
export class SeasonResolver {
  constructor(private readonly seasonService: SeasonService) {}

  @Mutation(() => Season)
  @Authorized()
  async addSeason(@Arg("input") input: Seasoninput): Promise<Season> {
    return this.seasonService.addSeason(input);
  }
}
