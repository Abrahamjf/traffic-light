import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [takenColor, setTakenColor] = useState ("green");

	return (
		<div>
			<div className="traffic-light-tube"></div>
			<div className="traffic-light-box">
				<div onClick = {() => setTakenColor ("red")} className ={"light red " + ((takenColor === "red") ? "glow" : "")}></div>
				<div onClick = {() => setTakenColor ("yellow")} className ={"light yellow " + ((takenColor === "yellow") ? "glow" : "")}></div>
				<div onClick = {() => setTakenColor ("green")} className ={"light green " + ((takenColor === "green") ? "glow" : "")}></div>
			</div>
		</div>
	);
};

