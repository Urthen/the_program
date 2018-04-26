import React from "react";
import "./Header.css";
import numeral from "numeral";

numeral.defaultFormat("0.[0]a");

const Header = ({ energy, light, actions: { exist } }) => (
	<div className="Header">
		<div className="Title Header-section">::the_program</div>
		<div className="Energy Header-section">
			{numeral(energy).format()} .energy
		</div>
		<div className="Light Header-section">
			{numeral(light).format()} .light
		</div>
		<div className="Existance Header-section">
			<button onClick={exist}>exist()</button>
		</div>
	</div>
);

export default Header;
