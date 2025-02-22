import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Mission = sequelize.define(
    "Mission",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        tableName: "missions",
        timestamps: false,
    }
);

export default Mission;