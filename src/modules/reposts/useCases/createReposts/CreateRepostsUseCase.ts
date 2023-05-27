import { ICreateRepostDto } from "../../repositories/IRepostsRepository";
import { RepostsRepository } from "../../repositories/RepostsRepository";

class CreateRepostsUseCase {
  constructor(private repostsRepository: RepostsRepository) {}
  async execute({ description, post }: ICreateRepostDto) {
    await this.repostsRepository.create({ description, post });
  }
}

export { CreateRepostsUseCase };
