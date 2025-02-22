import { Router } from "express";
import {
    getAllHeroesCtrl,
    getHeroByIdCtrl,
    createHeroCtrl,
    updateHeroCtrl,
    deleteHeroCtrl,
    restoreHeroCtrl,
} from "../controllers/hero.controller.js";

const router = Router();

router.get("/", getAllHeroesCtrl);
router.get("/:id", getHeroByIdCtrl);
router.post("/", createHeroCtrl);
router.put("/:id", updateHeroCtrl);
router.delete("/:id", deleteHeroCtrl);

router.patch("/:id/restore", restoreHeroCtrl);

export default router;
