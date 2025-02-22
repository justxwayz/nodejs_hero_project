import { Router } from "express";
import {
    getAllPowersCtrl,
    getPowerByIdCtrl,
    createPowerCtrl,
    updatePowerCtrl,
    deletePowerCtrl,
} from "../controllers/power.controller.js";

const router = Router();

router.get("/", getAllPowersCtrl);
router.get("/:id", getPowerByIdCtrl);
router.post("/", createPowerCtrl);
router.put("/:id", updatePowerCtrl);
router.delete("/:id", deletePowerCtrl);

export default router;