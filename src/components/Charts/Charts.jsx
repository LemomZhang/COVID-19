import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';
export default function Charts() {
	const [dailyData, setDailyData] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData());
		};

		fetchAPI();
	});

	const lineChart =
		dailyData.length !== 0 ? (
			<Line
				data={{
					labels: dailyData.map(({ date }) => date),
					datasets: [
						{
							data: dailyData.map(({ confirmed }) => confirmed),
							label: '确诊人数',
							borderColor: '#3333ff',
							fill: true,
						},
						{
							data: dailyData.map(({ deaths }) => deaths),
							label: '死亡人数',
							borderColor: 'red',
							backgroundColor: 'rgba(255,0,0,0.5)',
							fill: true,
						},
					],
				}}
			/>
		) : null;
	return (
		<div className={styles.container}>
			<h3>国内疫情</h3>
			{lineChart}
		</div>
	);
}
