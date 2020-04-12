import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Grid,
	CircularProgress,
} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return (
			<div className={styles.top}>
				<CircularProgress disableShrink />
			</div>
		);
	}
	return (
		<div className={styles.top}>
			<Grid container spacing={3} justify="center">
				<Grid
					item
					xs={12}
					md={3}
					component={Card}
					className={cx(styles.card, styles.infected)}
				>
					<CardContent>
						<Typography
							variant="h6"
							color="textSecondary"
							gutterBottom
						>
							累计确诊
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.0}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							<br />
							{new Date(lastUpdate).toLocaleString()}
						</Typography>
						<Typography variant="body2" component="p">
							<br />
							确诊人数
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					xs={12}
					md={3}
					component={Card}
					className={cx(styles.card, styles.recovered)}
					zeroMinWidth
				>
					<CardContent>
						<Typography
							variant="h6"
							color="textSecondary"
							gutterBottom
						>
							治愈
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.75}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							<br />
							{new Date(lastUpdate).toLocaleString()}
						</Typography>
						<Typography variant="body2" component="p">
							<br />
							治愈人数
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					xs={12}
					md={3}
					component={Card}
					className={cx(styles.card, styles.deaths)}
				>
					<CardContent>
						<Typography
							variant="h6"
							color="textSecondary"
							gutterBottom
						>
							死亡
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={deaths.value}
								duration={2.75}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							<br />
							{new Date(lastUpdate).toLocaleString()}
						</Typography>
						<Typography variant="body2" component="p">
							<br />
							死亡人数
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};
export default Cards;
