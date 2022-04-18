import { InputType } from "type-graphql";
import { MovieInput } from "./movie";

@InputType({ description: "Movie input object type" })
export class SerieInput extends MovieInput {}
