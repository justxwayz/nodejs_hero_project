// models/hero.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


import Power from "./power.model.js";
import Mission from "./mission.model.js";

const Hero = sequelize.define(
    "Hero", // Nom "logique" du modèle
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 255],
            },
        },
        identity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        powerDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        tableName: "heroes", // Nom "physique" de la table
        defaultScope: {
            // Par défaut, on ne renvoie que ceux qui ne sont pas supprimés
            where: { isDeleted: false },
        },
        scopes: {
            deleted: {
                where: { isDeleted: true },
            },
            withDeleted: {},
        },
    }
);

// ----------------------------------------------------
// Associations (décommenter quand tu auras les modèles)
// ----------------------------------------------------

// Hero.hasMany(Power, { foreignKey: "heroId" });
// Power.belongsTo(Hero, { foreignKey: "heroId" });

// Hero.belongsToMany(Mission, {
//   through: "HeroMissions",
//   foreignKey: "heroId",
// });
// Mission.belongsToMany(Hero, {
//   through: "HeroMissions",
//   foreignKey: "missionId",
// });

export default Hero;
