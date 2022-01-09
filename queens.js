class QueenPosition{
		constructor(rowIndex, columIndex){
			
			this.rowIndex = rowIndex;
			this.columIndex = columIndex;
			
		}
		
		get leftDiagonal(){
			return this.rowIndex-this.columIndex;
		}
		
		get rightDiagonal(){
			return this.rowIndex+this.columIndex;
		}


		
}

function isSafe(queenPositions, rowIndex, columIndex){
	const newQueenPosition = new QueenPosition(rowIndex, columIndex);
	
	for(let queenIndex =0; queenIndex<queenPositions.length; queenIndex += 1){
		
		const curretQueenPosition = queenPositions[queenIndex];
		
		if(
		curretQueenPosition && newQueenPosition.columIndex === curretQueenPosition.columIndex ||
		newQueenPosition.rowIndex === curretQueenPosition.rowIndex ||
		newQueenPosition.leftDiagonal === curretQueenPosition.leftDiagonal ||
		newQueenPosition.rightDiagonal === curretQueenPosition.rightDiagonal
		
		){
			return false;
		}
		
	}
	
	return true;
	
}

function nQueensRecursive(solutions, previousQueensPositions, queensCount, columnindex){

	const queenPositions = [...previousQueensPositions].map(QueenPosition => {
		return !queenPosition ? queenPosition : new QueenPosition(queenPosition.rowIndex, queenPosition.columIndex)

	});

	if(allQueenSet(queenPositions)){
		solution
	}
}


function nQueens(queensCount){
	const queenPositions = Array(queensCount).fill(null);
	const solutions = [];
	
	nQueensRecursive(solutions, queenPositions, 0)
	
	return solutions
	
	
}