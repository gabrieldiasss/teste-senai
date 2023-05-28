import { TypeORMError } from "typeorm"

export class AppError {
    public readonly message: string

    public readonly statusCode: number

    constructor(message: string, statusCode = 400) {
        this.message = message
        this.statusCode = statusCode
    }
}

export class ErrorTypeOrm extends TypeORMError {
    public readonly message: string

    public readonly statusCode: number

    constructor(message: string, statusCode = 400) {
        super()
        this.message = message
        this.statusCode = statusCode
    }
}