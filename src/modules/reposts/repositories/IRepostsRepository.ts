interface ICreateRepostDto {
  description: string;
  post: any
}

interface IRepostsRepository {
  list(): void;
  create({ description, post }: ICreateRepostDto): Promise<void>;
}

export { IRepostsRepository, ICreateRepostDto };
