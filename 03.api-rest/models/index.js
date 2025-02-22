import Hero from "./hero.model.js";
import Power from "./power.model.js";
import Mission from "./mission.model.js";

Hero.hasMany(Power, { foreignKey: "heroId" });
Power.belongsTo(Hero, { foreignKey: "heroId" });

Hero.belongsToMany(Mission, { through: "HeroMissions", foreignKey: "heroId" });
Mission.belongsToMany(Hero, { through: "HeroMissions", foreignKey: "missionId" });

export { Hero, Power, Mission };
