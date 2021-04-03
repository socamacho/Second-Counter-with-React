import React from "react";
import PropTypes from "prop-types";

const SecondCounter = props => {
	const secondsString = props.seconds.toString(); //Con toString() convierto a string los numeros para poder ser leidos por el for.
	const cantidadDeCaracteres = secondsString.length;
	const cantidadDeCerosIzq = 5 - cantidadDeCaracteres;

	let stringDeCeros = "";
	for (let i = 0; i < cantidadDeCerosIzq; i++) {
		stringDeCeros = stringDeCeros + "0";
	}

	const valorAMostrar = stringDeCeros + props.seconds;

	return (
		<div className="container">
			<div className="symbol">
				<i className="far fa-clock"></i>
			</div>
			<div className="boxes">{valorAMostrar}</div>
		</div>
	);
};

SecondCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondCounter;
