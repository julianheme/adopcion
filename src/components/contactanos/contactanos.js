import React, { Component } from "react";
import ZeriContact from "../../imagenes/petsByZeriContact.png";
import Style from "./contactanos.module.css";
import Send from "../buttons/send/send";

const Contactanos = (props) => {
	return (
		<div className={Style.grid}>
			<div className={Style.item1}>
				<img src={ZeriContact} />
				<p>Bogotá, Colombia</p>
				<p>
					<a href="tel:+573155570782">Tel. (315) 557 0782</a>
				</p>
				<p>
					<a target={"blank"} href={"mailto:master@zeri.dev"}>
						master@zeri.dev
					</a>
				</p>
				<br />
			</div>
		</div>
	);
};

export default Contactanos;
