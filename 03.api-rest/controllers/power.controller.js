
import * as PowerService from "../services/power.service.js";

export async function createPower(req, res, next) {
    try {
        const { name, description, heroId } = req.body;
        const newPower = await PowerService.createPower({ name, description, heroId });
        res.status(201).json(newPower);
    } catch (error) {
        next(error);
    }
}

export async function getAllPowers(req, res, next) {
    try {
        const powers = await PowerService.getAllPowers();
        res.json(powers);
    } catch (error) {
        next(error);
    }
}

export async function getPowerById(req, res, next) {
    try {
        const { id } = req.params;
        const power = await PowerService.getPowerById(id);
        res.json(power);
    } catch (error) {
        next(error);
    }
}

export async function updatePower(req, res, next) {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updated = await PowerService.updatePower(id, { name, description });
        res.json(updated);
    } catch (error) {
        next(error);
    }
}

export async function deletePower(req, res, next) {
    try {
        const { id } = req.params;
        const deleted = await PowerService.deletePower(id);
        res.json(deleted);
    } catch (error) {
        next(error);
    }
}

// Optionnel : lister les pouvoirs d'un héros
export async function getPowersByHeroId(req, res, next) {
    try {
        const { heroId } = req.params;
        const powers = await PowerService.getPowersByHeroId(heroId);
        res.json(powers);
    } catch (error) {
        next(error);
    }
}
