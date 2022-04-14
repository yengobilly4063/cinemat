import { AuthChecker } from "type-graphql";
import Context from "../../common/types/context";

const authChecker: AuthChecker<Context> = ({ root, args, context, info }): boolean => {
  return !!context.user;
};

export default authChecker;
