import React from "react";
import TextField from '@mui/material/TextField';

export const Calculator: React.FC = () => {
	return (
		<div style={{ flexDirection: 'column' }}>
			<h2>Hypoteční kalkulačka WIP</h2>
			<TextField label='Výše úvěru' type='number' />
			<div />
			<TextField label='Doba splácení(roky)' type='number' />
			<div />
			<TextField label='Roční úroková sazba' type='number' />
			<div />
			<h3>Měsíční splátka: </h3>
			<div />
			<h3>Celkem se zaplatí: </h3>
		</div>
	);
};
