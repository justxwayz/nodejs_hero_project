// server.js
import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";

import { logMiddleware } from "./middlewares/log.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { initializeHeroMock } from "./services/mock.service.js";

import heroRouter from "./routers/hero.router.js";
import powerRouter from "./routers/power.router.js";
import missionRouter from "./routers/mission.router.js";


await sequelize.sync({ force: true });
console.log("Base de donnée synchronisée !");

// Initialisation de quelques héros de test
await initializeHeroMock();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logMiddleware);

// On “monte” nos routes
app.use("/api/v1/heroes", heroRouter);
app.use("/api/v1/powers", powerRouter);
app.use("/api/v1/missions", missionRouter);

// Gestion d’erreur globale
app.use(errorHandler);

app.listen(3000, () => console.log("Server listen on http://localhost:3000"));
