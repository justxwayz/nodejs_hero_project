import {addHero, getAllHeroes, heroExists} from "../model/hero.model.js";

export async function renderHome(req, res) {
    res.render("index", {
        heroes: getAllHeroes(),
        h1: "Bureau d'enregistrement",
    });
}

export async function addHeroes(req, res) {
    const { heroName, identity } = req.body;
    if (!heroName || heroName.length < 3 || !/^[a-zA-Z ]+$/.test(heroName)) {
        return res
            .status(400)
            .send(
                "Le nom du héros est requis, il doit faire au moins 3 caractères et ne pas contenir de caractères spéciaux (espaces autorisés) !"
            );
    }
    if (!identity || identity.length < 3 || !/^[a-zA-Z ]+$/.test(identity)) {
        return res
            .status(400)
            .send(
                "L'identité du héros est requis, il doit faire au moins 3 caractères et ne pas contenir de caractères spéciaux (espaces autorisés) !"
            );
    }

    if (heroExists(heroName)) {
        return res.status(400).send("Le héro existe déjà, change de nom par pitié.")
    }

    addHero({ heroName, identity });

    res.redirect("/");
}

export async function renderHeroesList(req, res) {
    res.render("heroes", { heroes: getAllHeroes(), h1: "Liste des héros:" });
}