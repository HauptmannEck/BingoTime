import React, {Component, Fragment} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Board from './board';
import styles from './styles.less';
import JSS from '../jss';

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
						<Board />
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
