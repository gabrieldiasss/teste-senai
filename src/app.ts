import 'dotenv/config'
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import "express-async-errors";

const app = express();

import { createConnection } from "./database/data-source";
import { router } from "./routes";
import { AppError, ErrorTypeOrm } from "./errors/AppError";
import { TypeORMError } from "typeorm";
import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger.json"

createConnection();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(router);

app.use((err: Error, _: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  if (err instanceof ZodError) {
    return response
      .status(400)
      .send({ message: "Validation Error", issues: err.format() });
  }

  if (err instanceof TypeORMError) {
    throw new ErrorTypeOrm(
      "The provided ID does not exist. Please check if the ID is correct and try again.",
      400
    );
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

export { app }