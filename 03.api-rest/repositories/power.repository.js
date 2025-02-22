// repositories/power.repository.js
import Power from "../models/power.model.js";

export async function createPower({ name, description, heroId }) {
    return await Power.create({ name, description, heroId });
}

export async function getPowerById(id) {
    return await Power.findByPk(id);
}

export async function updatePower(id, values) {
    const power = await getPowerById(id);
    if (!power) return null;
    return await power.update(values);
}

export async function deletePower(id) {
    const power = await getPowerById(id);
    if (!power) return null;
    await power.destroy();
    return power;
}

export async function getAllPowers() {
    return await Power.findAll();
}

// éventuellement un getAllPowersByHeroId si tu veux lister
export async function getAllPowersByHeroId(heroId) {
    return await Power.findAll({
        where: { heroId },
    });
}
