import * as MissionRepository from "../repositories/mission.repository.js";
import { BadRequestError, NotFoundError } from "../errors/api.error.js";

export async function createNewMission({ title, description, isCompleted }) {
    if (!title || title.length < 3) {
        throw new BadRequestError("Titre de la mission invalide (3 caractères min).");
    }
    return await MissionRepository.createMission({ title, description, isCompleted });
}

export async function getAllMissions() {
    return await MissionRepository.getAllMissions();
}

export async function getMissionById(id) {
    const mission = await MissionRepository.getMissionById(id);
    if (!mission) {
        throw new NotFoundError("Mission introuvable.");
    }
    return mission;
}

export async function updateMission(id, values) {
    const updated = await MissionRepository.updateMission(id, values);
    if (!updated) {
        throw new NotFoundError("Mission introuvable.");
    }
    return updated;
}

export async function deleteMission(id) {
    const deleted = await MissionRepository.deleteMission(id);
    if (!deleted) {
        throw new NotFoundError("Mission introuvable ou déjà supprimée.");
    }
    return deleted;
}