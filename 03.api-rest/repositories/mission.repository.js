// repositories/mission.repository.js
import Mission from "../models/mission.model.js";

export async function createMission({ title, description }) {
    return await Mission.create({ title, description });
}

export async function getMissionById(id) {
    return await Mission.findByPk(id);
}

export async function updateMission(id, values) {
    const mission = await getMissionById(id);
    if (!mission) return null;
    return await mission.update(values);
}

export async function deleteMission(id) {
    const mission = await getMissionById(id);
    if (!mission) return null;
    await mission.destroy();
    return mission;
}

export async function getAllMissions() {
    return await Mission.findAll();
}
