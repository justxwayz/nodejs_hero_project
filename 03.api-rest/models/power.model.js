// models/power.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Power = sequelize.define(
    "Power",
    {
        name: {
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
    },
    {
        tableName: "powers",
    }
);

export default Power;
