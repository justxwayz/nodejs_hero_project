// routers/hero.router.js
import express from "express";
import * as HeroController from "../controllers/hero.controller.js";

const router = express.Router();

router.get("/", HeroController.getAllHeroes);
router.get("/:id", HeroController.getHeroById);
router.post("/", HeroController.createHero);
router.put("/:id", HeroController.updateHero);
router.delete("/:id", HeroController.deleteHero);

// Pour restaurer un héros soft-deleted
router.patch("/:id/restore", HeroController.restoreHero);

export default router;
