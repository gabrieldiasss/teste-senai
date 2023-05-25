import { Post } from "../model/Post"

interface ICreatePostDto {
    title: string
    description: string
    content: string
    author: string
}

interface IPostsRepository {
    create({ title, description, content, author }: ICreatePostDto): void;
}

export { IPostsRepository, ICreatePostDto}