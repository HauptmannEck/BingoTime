const _ = require('lodash');

exports.createBoard = () => {
	const B = _.shuffle(_.range(1, 16));
	const I = _.shuffle(_.range(16, 31));
	const N = _.shuffle(_.range(31, 46));
	const G = _.shuffle(_.range(46, 61));
	const O = _.shuffle(_.range(61, 76));
	const board = [];

	for(let i = 0; i < 5; i++){
		board.push(B.pop());
		board.push(I.pop());
		board.push(N.pop());
		board.push(G.pop());
		board.push(O.pop());
	}

	return board;
};