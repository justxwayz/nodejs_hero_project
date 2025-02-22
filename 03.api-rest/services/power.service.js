import * as PowerRepository from "../repositories/power.repository.js";
import { BadRequestError, NotFoundError } from "../errors/api.error.js";

export async function createNewPower({ name, description, heroId }) {
    if (!name || name.length < 3) {
        throw new BadRequestError("Nom de pouvoir invalide (3 caractères min).");
    }
    return await PowerRepository.createPower({ name, description, heroId });
}

export async function getAllPowers() {
    return await PowerRepository.getAllPowers();
}

export async function getPowerById(id) {
    const power = await PowerRepository.getPowerById(id);
    if (!power) {
        throw new NotFoundError("Pouvoir introuvable.");
    }
    return power;
}

export async function updatePower(id, values) {
    const power = await PowerRepository.updatePower(id, values);
    if (!power) {
        throw new NotFoundError("Pouvoir introuvable.");
    }
    return power;
}

export async function deletePower(id) {
    const deleted = await PowerRepository.deletePower(id);
    if (!deleted) {
        throw new NotFoundError("Pouvoir introuvable ou déjà supprimé.");
    }
    return deleted;
}
