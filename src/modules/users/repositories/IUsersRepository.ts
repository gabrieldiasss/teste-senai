import { ICreateUserDto } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  list(id: string): any;
  create(data: ICreateUserDto): Promise<void>
}

export { IUsersRepository, ICreateUserDto };
