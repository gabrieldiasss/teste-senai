import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"

const app = express();

import { createConnection } from "./database/data-source";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

createConnection();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running!"));
