// models/mission.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Mission = sequelize.define(
    "Mission",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 255],
            },
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
    }
);

export default Mission;
