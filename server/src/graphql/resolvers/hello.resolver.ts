import { Query, Resolver } from "type-graphql";

@Resolver(() => String || null)
class HelloResolver {
  @Query(() => String)
  async hello(): Promise<String> {
    return "test, hello world!";
  }
}

export default HelloResolver;
