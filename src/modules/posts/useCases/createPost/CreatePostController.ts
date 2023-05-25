import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) {}

    handle(request: Request, response: Response): Response {
        const { title, description, content, author } = request.body;
        
        this.createPostUseCase.execute({ title, description, content, author });
      
        return response.status(201).send();
    }
}

export { CreatePostController }