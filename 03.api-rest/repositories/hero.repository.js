// repositories/hero.repository.js
import Hero from "../models/hero.model.js";

export async function createHero({ alias, identity, powerDate }) {
    return await Hero.create({ alias, identity, powerDate });
}

export async function getHeroById(id) {
    return await Hero.findByPk(id);
}

export async function getDeletedHeroById(id) {
    return await Hero.scope("deleted").findByPk(id);
}

export async function updateHero(id, values) {
    const hero = await getHeroById(id);
    if (!hero) {
        return null;
    }
    return await hero.update(values);
}

export async function deleteHero(id) {
    const hero = await getHeroById(id);
    if (!hero) {
        return null;
    }
    // On fait juste le champ isDeleted à true
    return await updateHero(hero.id, { isDeleted: true });
}

export async function getAllHeroes() {
    return await Hero.findAll();
}

export async function heroExists(alias) {
    const hero = await Hero.findOne({ where: { alias } });
    return Boolean(hero);
}

export async function heroDeletedExists(alias) {
    // non utilisé dans ce code, à supprimer ou adapter si besoin
    const hero = await Hero.scope("deleted").findOne({ where: { alias } });
    return Boolean(hero);
}

export async function getAllHeroesWithDeleted() {
    return await Hero.scope("withDeleted").findAll();
}

export async function getAllHeroesDeleted() {
    return await Hero.scope("deleted").findAll();
}

export async function restoreHero(id) {
    const deletedHero = await getDeletedHeroById(id);
    if (!deletedHero) {
        return null;
    }
    // On enlève la vérification d’alias ici
    return await deletedHero.update({ isDeleted: false });
}
