import Mission from "../models/mission.model.js";
import Hero from "../models/hero.model.js";

export async function createMission({ title, description, isCompleted }) {
    return await Mission.create({ title, description, isCompleted });
}

export async function getMissionById(id) {
    return await Mission.findByPk(id, {
        include: [Hero],
    });
}

export async function getAllMissions() {
    return await Mission.findAll({
        include: [
            {
                model: Hero,
                through: { attributes: [] },
            },
        ],
    });
}

export async function updateMission(id, values) {
    const mission = await Mission.findByPk(id);
    if (!mission) return null;
    return await mission.update(values);
}

export async function deleteMission(id) {
    const mission = await Mission.findByPk(id);
    if (!mission) return null;
    await mission.destroy();
    return mission;
}