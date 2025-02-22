// services/power.service.js
import {
    ConflictError,
    BadRequestError,
    NotFoundError,
} from "../errors/api.error.js";
import * as PowerRepository from "../repositories/power.repository.js";
import * as HeroRepository from "../repositories/hero.repository.js";

export async function createPower({ name, description, heroId }) {
    if (!name || name.length < 3) {
        throw new BadRequestError("Nom de pouvoir invalide (3 caractères min).");
    }

    // Vérifier l’existence du heroId si c’est obligatoire
    const hero = await HeroRepository.getHeroById(heroId);
    if (!hero) {
        throw new NotFoundError("Le héros n'existe pas : impossible d'ajouter un pouvoir.");
    }

    return await PowerRepository.createPower({ name, description, heroId });
}

export async function getAllPowers() {
    return await PowerRepository.getAllPowers();
}

export async function getPowerById(id) {
    const power = await PowerRepository.getPowerById(id);
    if (!power) {
        throw new NotFoundError("Pouvoir non trouvé.");
    }
    return power;
}

export async function updatePower(id, { name, description }) {
    if (!name || name.length < 3) {
        throw new BadRequestError("Nom de pouvoir invalide (3 caractères min).");
    }

    const power = await PowerRepository.updatePower(id, { name, description });
    if (!power) {
        throw new NotFoundError("Pouvoir non trouvé.");
    }
    return power;
}

export async function deletePower(id) {
    const power = await PowerRepository.deletePower(id);
    if (!power) {
        throw new NotFoundError("Pouvoir non trouvé ou déjà supprimé.");
    }
    return power;
}

// Optionnel : récupérer les pouvoirs d'un héros
export async function getPowersByHeroId(heroId) {
    const hero = await HeroRepository.getHeroById(heroId);
    if (!hero) {
        throw new NotFoundError("Héros non trouvé.");
    }
    return await PowerRepository.getAllPowersByHeroId(heroId);
}
