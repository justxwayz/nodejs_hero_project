import { heroes } from "./db.js";
import { v4 as uuidv4 } from "uuid";

export function getAllHeroes() {
    return heroes;
}

export function addHero({ heroName, identity }) {
    const hero = {
        id: uuidv4(),
        heroName,
        identity,
        powerDate: new Intl.DateTimeFormat("fr-FR").format(new Date()),
    };
    heroes.push(hero);
}

export function heroExists(heroName) {
    return heroes.some((hero) => hero.heroName === heroName);
}