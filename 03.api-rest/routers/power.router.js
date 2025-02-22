
import express from "express";
import * as PowerController from "../controllers/power.controller.js";

const router = express.Router();


router.post("/", PowerController.createPower);
router.get("/", PowerController.getAllPowers);
router.get("/:id", PowerController.getPowerById);
router.put("/:id", PowerController.updatePower);
router.delete("/:id", PowerController.deletePower);

router.get("/hero/:heroId", PowerController.getPowersByHeroId);

export default router;
