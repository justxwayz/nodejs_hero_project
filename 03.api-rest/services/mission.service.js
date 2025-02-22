// services/mission.service.js
import { NotFoundError, BadRequestError } from "../errors/api.error.js";
import * as MissionRepository from "../repositories/mission.repository.js";

export async function createMission({ title, description }) {
    if (!title || title.length < 3) {
        throw new BadRequestError("Title non valide (3 caractères min).");
    }
    return await MissionRepository.createMission({ title, description });
}

export async function getAllMissions() {
    return await MissionRepository.getAllMissions();
}

export async function getMissionById(id) {
    const mission = await MissionRepository.getMissionById(id);
    if (!mission) {
        throw new NotFoundError("Mission non trouvée.");
    }
    return mission;
}

export async function updateMission(id, { title, description, isCompleted }) {
    if (!title || title.length < 3) {
        throw new BadRequestError("Title non valide (3 caractères min).");
    }

    const mission = await MissionRepository.updateMission(id, {
        title,
        description,
        isCompleted,
    });
    if (!mission) {
        throw new NotFoundError("Mission non trouvée.");
    }
    return mission;
}

export async function deleteMission(id) {
    const mission = await MissionRepository.deleteMission(id);
    if (!mission) {
        throw new NotFoundError("Mission non trouvée.");
    }
    return mission;
}
