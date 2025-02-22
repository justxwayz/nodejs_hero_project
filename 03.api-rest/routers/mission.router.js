import express from "express";
import * as MissionController from "../controllers/mission.controller.js";

const router = express.Router();

router.post("/", MissionController.createMission);
router.get("/", MissionController.getAllMissions);
router.get("/:id", MissionController.getMissionById);
router.put("/:id", MissionController.updateMission);
router.delete("/:id", MissionController.deleteMission);

export default router;