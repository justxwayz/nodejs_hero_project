import { heroesMocks } from "../mocks/hero.mock.js";
import { HeroService } from "../services/index.service.js";

export async function initializeHeroMock() {
    console.log("\n=========== START HERO MOCKING ===========\n");

    for (const hero of heroesMocks) {
        try {
            await HeroService.createHero(hero);
            console.log(hero);
        } catch (error) {
            console.log("[ERROR]", error.message);
        }
    }
    console.log("\n=========== END HERO MOCKING ===========\n");

    return await HeroService.getAllHeroes();
}
