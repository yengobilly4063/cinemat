import { Repository, getRepository as GetRepository, EntityTarget } from "typeorm";

export const getRepository = <T>(repo: EntityTarget<T>): Repository<T> => {
  return GetRepository(repo);
};
