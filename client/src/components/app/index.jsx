import React, {Component, Fragment} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import styles from './styles.less';
import JSS from '../jss';

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const Board = ({boxes}) => {
	return (
		<div className={styles.board}>
			<Typography variant="title" color="inherit" align="center">
				B
			</Typography>
			<Typography variant="title" color="inherit" align="center">
				I
			</Typography>
			<Typography variant="title" color="inherit" align="center">
				N
			</Typography>
			<Typography variant="title" color="inherit" align="center">
				G
			</Typography>
			<Typography variant="title" color="inherit" align="center">
				O
			</Typography>
			{boxes.map((item) => (
				<Paper key={item} className={styles.box}>
					<div className={styles.content}>
						{item}
					</div>
				</Paper>
			))}
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<JSS>
				<Fragment>
					<AppBar position="static">
						<Toolbar className={styles.root}>
							<IconButton color="inherit" aria-label="Menu">
								<Icon>home</Icon>
							</IconButton>
							<Typography variant="title" color="inherit" className={styles.title}>
								Bingo Time
							</Typography>
							<IconButton color="inherit" aria-label="Menu">
								<Icon>menu</Icon>
							</IconButton>
						</Toolbar>
					</AppBar>
					<div className={styles.root}>
						<Board boxes={boxes}/>
					</div>
					<div className={styles.footer}>
						Bingo Time is mine not yours 2018
					</div>
				</Fragment>
			</JSS>
		);
	}
}

export default App;
