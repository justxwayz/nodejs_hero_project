import {
    getAllHeroes,
    getHeroById,
    createHero,
    updateHero,
    deleteHero,
    restoreHero,
} from "../services/hero.service.js";

export async function getAllHeroesCtrl(req, res, next) {
    try {
        const heroes = await getAllHeroes();
        res.json(heroes);
    } catch (err) {
        next(err);
    }
}

export async function getHeroByIdCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const hero = await getHeroById(id);
        res.json(hero);
    } catch (err) {
        next(err);
    }
}

export async function createHeroCtrl(req, res, next) {
    try {
        const { alias, identity, powerDate } = req.body;
        const newHero = await createHero({ alias, identity, powerDate });
        res.json(newHero);
    } catch (err) {
        next(err);
    }
}

export async function updateHeroCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const updated = await updateHero(id, req.body);
        res.json(updated);
    } catch (err) {
        next(err);
    }
}

export async function deleteHeroCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const deleted = await deleteHero(id);
        res.json(deleted);
    } catch (err) {
        next(err);
    }
}

export async function restoreHeroCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const restored = await restoreHero(id);
        res.json(restored);
    } catch (err) {
        next(err);
    }
}