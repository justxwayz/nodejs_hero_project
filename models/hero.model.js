import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Hero = sequelize.define(
    "Hero",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: false,
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
        tableName: "heroes",
        defaultScope: {
            where: {
                isDeleted: false,
            },
        },
        scopes: {
            deleted: {
                where: {
                    isDeleted: true,
                },
            },
            withDeleted: {},
        },
    }
);

export default Hero;