
import * as MissionService from "../services/mission.service.js";

export async function createMission(req, res, next) {
    try {
        const { title, description } = req.body;
        const newMission = await MissionService.createMission({ title, description });
        res.status(201).json(newMission);
    } catch (error) {
        next(error);
    }
}

export async function getAllMissions(req, res, next) {
    try {
        const missions = await MissionService.getAllMissions();
        res.json(missions);
    } catch (error) {
        next(error);
    }
}

export async function getMissionById(req, res, next) {
    try {
        const { id } = req.params;
        const mission = await MissionService.getMissionById(id);
        res.json(mission);
    } catch (error) {
        next(error);
    }
}

export async function updateMission(req, res, next) {
    try {
        const { id } = req.params;
        const { title, description, isCompleted } = req.body;
        const updated = await MissionService.updateMission(id, {
            title,
            description,
            isCompleted,
        });
        res.json(updated);
    } catch (error) {
        next(error);
    }
}

export async function deleteMission(req, res, next) {
    try {
        const { id } = req.params;
        const deleted = await MissionService.deleteMission(id);
        res.json(deleted);
    } catch (error) {
        next(error);
    }
}
