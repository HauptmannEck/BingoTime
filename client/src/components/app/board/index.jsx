import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import styles from './styles.less';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			boxes: Array(25)
		}
	}

	componentDidMount() {
		this.fetchBoard();
	}

	fetchBoard() {
		fetch('/api/board')
			.then((response) => {
				return response.json();
			})
			.then((boxes) => {
				this.setState({
					boxes
				})
			});
	}

	render() {
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
				{this.state.boxes.map((item) => (
					<Paper key={item} className={styles.box}>
						<div className={styles.content}>
							{item}
						</div>
					</Paper>
				))}
			</div>
		);
	}
}

export default App;
