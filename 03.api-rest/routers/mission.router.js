import { Router } from "express";
import {
    getAllMissionsCtrl,
    getMissionByIdCtrl,
    createMissionCtrl,
    updateMissionCtrl,
    deleteMissionCtrl,
} from "../controllers/mission.controller.js";

const router = Router();

router.get("/", getAllMissionsCtrl);
router.get("/:id", getMissionByIdCtrl);
router.post("/", createMissionCtrl);
router.put("/:id", updateMissionCtrl);
router.delete("/:id", deleteMissionCtrl);

export default router;
