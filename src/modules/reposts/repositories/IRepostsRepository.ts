interface ICreateRepostDto {
  description: string;
}

interface IRepostsRepository {
  list(): void;
  create(data: ICreateRepostDto): Promise<void>;
}

export { IRepostsRepository, ICreateRepostDto };
