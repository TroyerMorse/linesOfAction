function CalculateWinner(positions, cPosition, p, turn, checkersTouching) {
    for(let left = -1; left < 2; left++){
        if(positions[p[0]-left][p[1]-1] === 'x' | positions[p[0]-left][p[1]-1] === 'o'){
            checkersTouching.push(positions[p[0]-left][p[1]-1]);
        }
    }
}


export default CalculateWinner