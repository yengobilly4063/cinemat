import { SerieService } from "../../services";
import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Serie } from "../..//common/entities";
import { SerieInput } from "../types/serie";
import Context from "../../common/types/context";

@Service()
@Resolver(() => Serie)
export class SerieResolver {
  constructor(private readonly serieService: SerieService) {}

  @Mutation(() => Serie)
  @Authorized()
  async addSerie(@Arg("input") input: SerieInput, @Ctx() context: Context): Promise<Serie> {
    const { user } = context;
    console.log(input);
    return this.serieService.addSerie(input, user);
  }

  @Mutation(() => Boolean)
  @Authorized()
  async deleteSerie(@Arg("id") id: string): Promise<boolean> {
    return this.serieService.deleteSerie(id);
  }
}
