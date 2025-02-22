import {
    getAllMissions,
    getMissionById,
    createNewMission,
    updateMission,
    deleteMission,
} from "../services/mission.service.js";

export async function getAllMissionsCtrl(req, res, next) {
    try {
        const missions = await getAllMissions();
        res.json(missions);
    } catch (err) {
        next(err);
    }
}

export async function getMissionByIdCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const mission = await getMissionById(id);
        res.json(mission);
    } catch (err) {
        next(err);
    }
}

export async function createMissionCtrl(req, res, next) {
    try {
        const { title, description, isCompleted } = req.body;
        const newMission = await createNewMission({ title, description, isCompleted });
        res.json(newMission);
    } catch (err) {
        next(err);
    }
}

export async function updateMissionCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const updated = await updateMission(id, req.body);
        res.json(updated);
    } catch (err) {
        next(err);
    }
}

export async function deleteMissionCtrl(req, res, next) {
    try {
        const { id } = req.params;
        const deleted = await deleteMission(id);
        res.json(deleted);
    } catch (err) {
        next(err);
    }
}