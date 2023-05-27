interface ICreateRepostDto {
  description: string;
  post: any
  user: any
}

interface IRepostsRepository {
  create({ description, post, user }: ICreateRepostDto): Promise<void>;
}

export { IRepostsRepository, ICreateRepostDto };
