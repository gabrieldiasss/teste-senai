import { ICreateRepostDto } from "../../repositories/IRepostsRepository";
import { RepostsRepository } from "../../repositories/RepostsRepository";

class CreateRepostsUseCase {
    constructor(private repostsRepository: RepostsRepository) {}
    async execute({ description }: ICreateRepostDto) {
        await this.repostsRepository.create({ description })
    }
  }
  
  export { CreateRepostsUseCase };
  