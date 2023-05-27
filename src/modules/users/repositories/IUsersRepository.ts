import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  list(id: string): Promise<User>;
  findByName(name: string): Promise<User>
  create(data: ICreateUserDto): Promise<void>
}

export { IUsersRepository, ICreateUserDto };
