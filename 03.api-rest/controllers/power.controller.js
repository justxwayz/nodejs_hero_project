import {
    getAllPowers,
    getPowerById,
    createNewPower,
    updatePower,
    deletePower,
} from "../services/power.service.js";

export async function getAllPowersCtrl(req, res, next) {
    try {
        const powers = await getAllPowers();
        res.json(powers);
    } catch (err) {
        next(err);
    }
}

export async function getPowerByIdCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const power = await getPowerById(id);
        res.json(power);
    } catch (err) {
        next(err);
    }
}

export async function createPowerCtrl(req, res, next) {
    try {
        const { name, description, heroId } = req.body;
        const newPower = await createNewPower({ name, description, heroId });
        res.json(newPower);
    } catch (err) {
        next(err);
    }
}

export async function updatePowerCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const updated = await updatePower(id, req.body);
        res.json(updated);
    } catch (err) {
        next(err);
    }
}

export async function deletePowerCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const deleted = await deletePower(id);
        res.json(deleted);
    } catch (err) {
        next(err);
    }
}
