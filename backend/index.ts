import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./src/data-source";
import cors from "cors";

import * as StoreController from "./src/controller/StoreController";

const PORT = 3333;

async function startup() {
  await AppDataSource.initialize();
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post('/store', StoreController.save);
  app.get('/store', StoreController.getAll);

  app.listen(PORT, () => console.log(`Server runnig on ${PORT}`));
}

startup();
