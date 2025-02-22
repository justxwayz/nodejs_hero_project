import Power from "../models/power.model.js";
import Hero from "../models/hero.model.js";

export async function createPower({ name, description, heroId }) {
    return await Power.create({ name, description, heroId });
}

export async function getPowerById(id) {
    return await Power.findByPk(id, {
        include: [Hero],
    });
}

export async function getAllPowers() {
    return await Power.findAll({
        include: [Hero],
    });
}

export async function updatePower(id, values) {
    const power = await Power.findByPk(id);
    if (!power) return null;
    return await power.update(values);
}

export async function deletePower(id) {
    const power = await Power.findByPk(id);
    if (!power) return null;
    await power.destroy();
    return power;
}
