import express from "express";
import cors from "cors";

import sequelize from "./config/database.js";
import "./models/index.js";

import heroRouter from "./routers/hero.router.js";
import powerRouter from "./routers/power.router.js";
import missionRouter from "./routers/mission.router.js";

import { logMiddleware } from "./middlewares/log.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

import {
    initializeHeroMock,
    initializePowerMock,
    initializeMissionMock,
} from "./services/mock.service.js";

async function main() {
    await sequelize.sync({ force: true });
    console.log("Base de donnée synchronisée !");

    // 2) Insertion des mocks
    await initializeHeroMock();
    await initializePowerMock();
    await initializeMissionMock();
    console.log("Données mock insérées !");

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(logMiddleware);

    app.get("/", (req, res) => {
        res.send("Bienvenue sur mon API de super-héros !");
    });

    app.use("/api/v1/heroes", heroRouter);
    app.use("/api/v1/powers", powerRouter);
    app.use("/api/v1/missions", missionRouter);

    app.use(errorHandler);

    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
}

main().catch((err) => {
    console.error("Erreur au démarrage du serveur :", err);
});