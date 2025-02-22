// services/hero.service.js
import {
    ConflictError,
    BadRequestError,
    NotFoundError,
} from "../errors/api.error.js";
import * as HeroRepository from "../repositories/hero.repository.js";

export async function getHeroById(id) {
    const hero = await HeroRepository.getHeroById(id);
    if (!hero) {
        throw new NotFoundError("Le héros n'existe pas.");
    }
    return {
        id: hero.id,
        alias: hero.alias,
        // par ex. extraire juste l’année si c’est un string “JJ/MM/AAAA”
        powerDate: hero.powerDate?.slice(-4),
        identity: hero.identity,
    };
}

export async function createHero({ alias, identity, powerDate }) {
    // Validation manuelle (alias min 3 caractères, etc.)
    if (!alias || alias.length < 3 || !/^[a-zA-Z ]+$/.test(alias)) {
        throw new BadRequestError("Alias non valide (3 caractères min, lettres/espaces).");
    }

    if (await HeroRepository.heroExists(alias)) {
        throw new ConflictError("Le héros existe déjà (alias).");
    }

    const hero = await HeroRepository.createHero({ alias, identity, powerDate });
    return hero.dataValues;
}

export async function updateHero(id, { alias, identity, powerDate }) {
    if (!alias || alias.length < 3 || !/^[a-zA-Z ]+$/.test(alias)) {
        throw new BadRequestError("Alias non valide (3 caractères min, etc.)");
    }

    // On vérifie d’abord que le héros existe
    const existingHero = await HeroRepository.getHeroById(id);
    if (!existingHero) {
        throw new NotFoundError("Le héros n'existe pas (id).");
    }

    // On vérifie ensuite s’il y a un conflit d’alias avec un autre héros
    if (await HeroRepository.heroExists(alias) && alias !== existingHero.alias) {
        throw new ConflictError("Le héros existe déjà (alias).");
    }

    const hero = await HeroRepository.updateHero(id, {
        alias,
        identity,
        powerDate,
    });

    return hero.dataValues;
}

export async function deleteHero(id) {
    const hero = await HeroRepository.getHeroById(id);
    if (!hero) {
        throw new NotFoundError("Le héros n'existe pas.");
    }
    return await HeroRepository.deleteHero(id);
}

export async function getAllHeroes() {
    const heroes = await HeroRepository.getAllHeroes();
    return heroes.map((hero) => ({
        id: hero.id,
        alias: hero.alias,
        powerDate: hero.powerDate?.slice(-4),
        identity: hero.identity,
    }));
}

export async function restoreHero(id) {
    // On va d’abord chercher le héros (scope: deleted)
    const deletedHero = await HeroRepository.getDeletedHeroById(id);
    if (!deletedHero) {
        throw new NotFoundError("Le héros n'existe pas ou n'est pas supprimé.");
    }

    // Vérifier s’il y a déjà un héros actif avec le même alias
    if (await HeroRepository.heroExists(deletedHero.alias)) {
        throw new ConflictError("L'alias existe déjà : impossible de restaurer.");
    }

    // On restaure
    const restoredHero = await HeroRepository.restoreHero(id);
    if (!restoredHero) {
        // si le repository renvoie null
        throw new NotFoundError("Impossible de restaurer le héros.");
    }

    return restoredHero;
}
