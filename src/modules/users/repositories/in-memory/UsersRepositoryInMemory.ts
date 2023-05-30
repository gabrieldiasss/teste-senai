import { User } from "../../entities/User";
import { ICreateUserDto, IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = []

    listOne(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async listAll(): Promise<User[]> {
        const allUsers = this.users
        return allUsers
    }

    async findByName(name: string): Promise<User> {
        const user = this.users.find((user) => user.name === name)

        return user
    }

    async create({ name }: ICreateUserDto): Promise<void> {
        const user = new User()

        Object.assign(user, {
            name
        })

        this.users.push(user)
    }

}

export { UsersRepositoryInMemory }