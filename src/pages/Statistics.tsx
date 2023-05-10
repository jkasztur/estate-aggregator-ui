import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import { formatDate } from "../utils";
import { getAxios } from "../axios";

type StatsItem = {
	date: string,
} & Record<string, number>

export const Statistics: React.FC = () => {
	const [countStats, setCountStats] = useState<StatsItem[]>([]);
	const [perMeterStats, setPerMeterStats] = useState<StatsItem[]>([]);
	const [priceStats, setPriceStats] = useState<StatsItem[]>([]);

	const fetchStats = async (type: string, callback: Function) => {
		const axios = getAxios()
		const response = await axios.get(`/stats/${type}`)
		callback(response.data)
	}

	useEffect(() => {
		fetchStats('count', setCountStats)
		fetchStats('avg_price', setPriceStats)
		fetchStats('avg_per_meter', setPerMeterStats)
	}, [])

	return (
		<div style={{ flexDirection: 'column' }}>
			<h2>Statistiky</h2>
			<h2>Počet nabídek</h2>
			<LineChart
				width={800}
				height={400}
				data={countStats}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" tickFormatter={formatDate} />
				<YAxis />
				<Tooltip />
				<Line type="monotone" dataKey="2+kk" strokeWidth={2} stroke="#8884d8" fill="#8884d8" />
				<Line type="monotone" dataKey="2+1" strokeWidth={2} stroke="#82ca9d" fill="#82ca9d" />
				<Line type="monotone" dataKey="3+1" strokeWidth={2} stroke="#ffc658" fill="#ffc658" />
				<Line type="monotone" dataKey="3+kk" strokeWidth={2} stroke="#ffc658" fill="#d3761f" />
			</LineChart>
			<h2>Průměrná cena bytu</h2>
			<LineChart
				width={800}
				height={400}
				data={priceStats}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" tickFormatter={formatDate} />
				<YAxis />
				<Tooltip />
				<Line type="monotone" dataKey="2+kk" strokeWidth={2} stroke="#8884d8" fill="#8884d8" />
				<Line type="monotone" dataKey="2+1" strokeWidth={2} stroke="#82ca9d" fill="#82ca9d" />
				<Line type="monotone" dataKey="3+1" strokeWidth={2} stroke="#ffc658" fill="#ffc658" />
				<Line type="monotone" dataKey="3+kk" strokeWidth={2} stroke="#ffc658" fill="#d3761f" />
			</LineChart>
			<h2>Průměrná cena za m2</h2>
			<LineChart
				width={800}
				height={400}
				data={perMeterStats}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" tickFormatter={formatDate} />
				<YAxis />
				<Tooltip />
				<Line type="monotone" dataKey="2+kk" strokeWidth={2} stroke="#8884d8" fill="#8884d8" />
				<Line type="monotone" dataKey="2+1" strokeWidth={2} stroke="#82ca9d" fill="#82ca9d" />
				<Line type="monotone" dataKey="3+1" strokeWidth={2} stroke="#ffc658" fill="#ffc658" />
				<Line type="monotone" dataKey="3+kk" strokeWidth={2} stroke="#ffc658" fill="#d3761f" />
			</LineChart>
		</div>
	);
};
