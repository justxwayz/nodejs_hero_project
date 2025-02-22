import { heroesMocks } from "../mocks/hero.mock.js";
import { powersMocks } from "../mocks/power.mock.js";
import { missionsMocks } from "../mocks/mission.mock.js";

import { HeroService, PowerService, MissionService } from "./index.service.js";

export async function initializeHeroMock() {
    console.log("=== INITIALIZING HERO MOCKS ===");
    for (const heroData of heroesMocks) {
        try {
            const newHero = await HeroService.createHero(heroData);
            console.log("Created hero:", newHero.dataValues || newHero);
        } catch (error) {
            console.error("Error creating hero:", error.message);
        }
    }
    console.log("=== HERO MOCKS DONE ===");
}

export async function initializePowerMock() {
    console.log("=== INITIALIZING POWER MOCKS ===");
    for (const pwr of powersMocks) {
        try {

            const hero = await HeroService.findHeroByAlias(pwr.heroAlias);
            if (!hero) {
                console.warn(`[WARN] Hero alias "${pwr.heroAlias}" not found => skip power`);
                continue;
            }

            const newPower = await PowerService.createNewPower({
                name: pwr.name,
                description: pwr.description,
                heroId: hero.id,
            });
            console.log("Created power:", newPower.dataValues || newPower);
        } catch (error) {
            console.error("Error creating power:", error.message);
        }
    }
    console.log("=== POWER MOCKS DONE ===");
}

export async function initializeMissionMock() {
    console.log("=== INITIALIZING MISSION MOCKS ===");
    for (const missionData of missionsMocks) {
        try {
            const { heroAliases, ...missionFields } = missionData;


            const newMission = await MissionService.createNewMission(missionFields);
            console.log("Created mission:", newMission.dataValues || newMission);


            for (const alias of heroAliases) {
                const hero = await HeroService.findHeroByAlias(alias);
                if (!hero) {
                    console.warn(`[WARN] Hero alias "${alias}" not found => skip association`);
                    continue;
                }
                await newMission.addHero(hero);
                console.log(`Associated mission "${newMission.title}" with hero "${alias}"`);
            }
        } catch (error) {
            console.error("Error creating mission:", error.message);
        }
    }
    console.log("=== MISSION MOCKS DONE ===");
}
