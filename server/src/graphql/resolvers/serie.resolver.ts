import { SeasonService, SerieService } from "../../services";
import { Arg, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { Service } from "typedi";
import { Season, Serie } from "../../common/entities";
import { SerieInput } from "../types/serie";
import Context from "../../common/types/context";

@Service()
@Resolver(() => Serie)
export class SerieResolver {
  constructor(private readonly serieService: SerieService, private readonly seasonService: SeasonService) {}

  @Mutation(() => Serie)
  @Authorized()
  async addSerie(@Arg("input") input: SerieInput, @Ctx() context: Context): Promise<Serie> {
    const { user } = context;
    return this.serieService.addSerie(input, user);
  }

  @Mutation(() => Boolean)
  @Authorized()
  async deleteSerie(@Arg("id") id: string): Promise<boolean> {
    return this.serieService.deleteSerie(id);
  }

  @FieldResolver()
  @Query(() => [Season]!)
  async seasons(@Root() serie: Serie): Promise<Season[]> {
    const { id: serieId } = serie;
    console.log("serir", serie);
    return this.seasonService.findSeasonsBySerieId(serieId);
  }

  @Query(() => [Serie])
  @Authorized()
  async getSeries(@Ctx() context: Context): Promise<Serie[]> {
    const {
      user: { id },
    } = context;
    return this.serieService.getSeries(id);
  }
}
