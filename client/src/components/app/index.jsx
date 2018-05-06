import React, {Component, Fragment} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import styles from './styles.less';
import JSS from "../jss";

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
					<Grid container spacing={16} className={styles.root}>
						<Grid item xs={6}>
							LEFT
						</Grid>
						<Grid item xs={6}>
							Right
						</Grid>
						<Grid item xs={12} style={{textAlign: 'center'}}>
							Bingo Time is mine not yours 2018
						</Grid>
					</Grid>
				</Fragment>
			</JSS>
		);
	}
}

export default App;
