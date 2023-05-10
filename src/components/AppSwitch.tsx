import React from "react";
import { Calculator } from '../pages/Calculator'
import { Route, Routes } from "react-router-dom";
import { Statistics } from "../pages/Statistics";

export default function AppSwitch() {
	return (
		<Routes>
			<Route path="/" element={<Statistics />} />
			<Route path="/calculator" element={<Calculator />} />
		</Routes>
	)
}