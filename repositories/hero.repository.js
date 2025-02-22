import Hero from "../models/hero.model.js";
import Power from "../models/power.model.js";
import Mission from "../models/mission.model.js";
import { Op } from "sequelize";

export async function createHero({ alias, identity, powerDate }) {
    return await Hero.create({ alias, identity, powerDate });
}

export async function findHeroByAlias(alias) {
    return await Hero.findOne({ where: { alias } });
}

export async function getHeroById(id) {
    return await Hero.findByPk(id);
}

export async function updateHero(id, values) {
    const hero = await getHeroById(id);
    if (!hero) return null;
    return await hero.update(values);
}

export async function deleteHero(id) {
    const hero = await getHeroById(id);
    if (!hero) return null;
    return await hero.update({ isDeleted: true });
}

export async function heroExists(alias) {
    const hero = await findHeroByAlias(alias);
    return Boolean(hero);
}

export async function getAllHeroes() {
    return await Hero.findAll({
        include: [
            { model: Power }, // powers
            { model: Mission, through: { attributes: [] } }, // missions
        ],
    });
}

export async function getDeletedHeroById(id) {
    return await Hero.scope("deleted").findByPk(id);
}

export async function restoreHero(id) {
    const hero = await getDeletedHeroById(id);
    if (!hero) return null;
    return await hero.update({ isDeleted: false });
}