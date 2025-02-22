import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Power = sequelize.define(
    "Power",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        heroId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "powers",
        timestamps: false,
    }
);

export default Power;
