import { Service } from "typedi";
import { getRepository, Repository } from "typeorm";
import { ApolloError } from "apollo-server-errors";
import { User } from "../common/entities";
import { comparePassword, hashPassword } from "../common/utils/password.utils";
import { CreateUserInput, LoginUserInput } from "../graphql/types/user.types";
import { generateToken } from "../common/utils/token.utils";

@Service()
export class UserService {
  userRepository: Repository<User> = getRepository(User);

  async registerUser(input: CreateUserInput): Promise<User> {
    const { username, password } = input;
    const errorMessage = "User already exists";

    const user = await this.getUserByUsername(username, this.userRepository);
    if (user) throw new ApolloError(errorMessage);

    return await this.userRepository.save({ ...input, password: await hashPassword(password) }, { reload: true });
  }

  async loginUser(input: LoginUserInput): Promise<String> {
    const errorMessage = "Invalid user credentials";
    const { username, password } = input;

    const user: User = await this.getUserByUsername(username, this.userRepository);
    if (!user) throw new ApolloError(errorMessage);

    const isValidPassword: boolean = await comparePassword(password, user.password);
    if (!isValidPassword) throw new Error(errorMessage);

    const token = generateToken(user);
    return token;
  }

  private async getUserByUsername(username: string, repository: Repository<User>): Promise<User> {
    return await repository.findOne({ username });
  }
}
