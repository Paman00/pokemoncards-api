import s from "./IconEnergy.module.css";
import colorless from "../assets/images/energy/colorless.png";
import darkness from "../assets/images/energy/darkness.png";
import dragon from "../assets/images/energy/dragon.png";
import fairy from "../assets/images/energy/fairy.png";
import fighting from "../assets/images/energy/fighting.png";
import fire from "../assets/images/energy/fire.png";
import grass from "../assets/images/energy/grass.png";
import lightning from "../assets/images/energy/lightning.png";
import metal from "../assets/images/energy/metal.png";
import psychic from "../assets/images/energy/psychic.png";
import water from "../assets/images/energy/water.png";

const energyTypes = {
	colorless,
	darkness,
	dragon,
	fairy,
	fighting,
	fire,
	grass,
	lightning,
	metal,
	psychic,
	water,
};

const IconEnergy = ({ type }) => {
	return (
		<image class={s.icon} src={energyTypes[type.toLowerCase()]} alt={`${type} energy`} />
	);
};

export { IconEnergy };
