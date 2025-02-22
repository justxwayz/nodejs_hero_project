import * as HeroRepository from "../repositories/hero.repository.js";
import { BadRequestError, ConflictError, NotFoundError } from "../errors/api.error.js";

export async function createHero({ alias, identity, powerDate }) {
    if (!alias || alias.length < 3) {
        throw new BadRequestError("Alias invalide (3 caractères min).");
    }
    if (await HeroRepository.heroExists(alias)) {
        throw new ConflictError("Un héros avec cet alias existe déjà.");
    }
    return await HeroRepository.createHero({ alias, identity, powerDate });
}

export async function getAllHeroes() {
    return await HeroRepository.getAllHeroes();
}

export async function getHeroById(id) {
    const hero = await HeroRepository.getHeroById(id);
    if (!hero) {
        throw new NotFoundError("Héros introuvable.");
    }
    return hero;
}

export async function updateHero(id, values) {
    const existing = await HeroRepository.getHeroById(id);
    if (!existing) {
        throw new NotFoundError("Héros introuvable.");
    }
    return await HeroRepository.updateHero(id, values);
}

export async function deleteHero(id) {
    const existing = await HeroRepository.getHeroById(id);
    if (!existing) {
        throw new NotFoundError("Héros introuvable.");
    }
    return await HeroRepository.deleteHero(id);
}

export async function restoreHero(id) {
    const restored = await HeroRepository.restoreHero(id);
    if (!restored) {
        throw new NotFoundError("Impossible de restaurer. Héros introuvable ou alias déjà pris.");
    }
    return restored;
}

export async function findHeroByAlias(alias) {
    return await HeroRepository.findHeroByAlias(alias);
}
